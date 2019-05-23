import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

import { stringBuilder } from "../../scripts/savedItems";
import AccountActions from "./account";

const actionTypes = {
  CHANGE_STEP: "CHANGE_STEP",
  MODIFY_POTENTIAL_QUANTITY: "MODIFY_POTENTIAL_QUANTITY",
  MODIFY_CART: "MODIFY_CART",
  MODIFY_ORDER_DETAILS: "MODIFY_ORDER_DETAILS",
  PROCESS_ORDER: "PROCESS_ORDER",
  CLEAR_CART: "CLEAR_CART"
};

const getActions = uri => {
  const objects = {
    changeStep: step => {
      return {
        type: actionTypes.CHANGE_STEP,
        step: step
      };
    },
    modifyOrderDetails: orderDetails => {
      return {
        type: actionTypes.MODIFY_ORDER_DETAILS,
        orderDetails: orderDetails
      };
    },
    modifyPotentialQuantity: input => {
      let _tag = input.tag;
      let _potentialQuantity = input.potentialQuantity;
      let _action = input.action;
      let _max = input.max;
      let _quantity = Math.min(input.quantity, _max);

      if (_tag != null && typeof _potentialQuantity === "number")
        _potentialQuantity = { [_tag]: _quantity };
      else if (_tag == null && typeof _potentialQuantity === "object")
        _potentialQuantity = _quantity;

      switch (_action) {
        case "SET":
          if (_tag == null) _potentialQuantity = _quantity;
          else _potentialQuantity[_tag] = _quantity;
          break;
        case "MODIFY":
          if (_tag == null)
            _potentialQuantity = Math.min(
              Math.max(1, _quantity + _potentialQuantity),
              _max
            );
          else
            _potentialQuantity[_tag] = Math.min(
              Math.max(1, _quantity + (_potentialQuantity[_tag] || 1)),
              _max
            );
          break;
        case "CLEAR":
          if (_tag == null) _potentialQuantity = 1;
          else delete _potentialQuantity[_tag];
          break;
      }

      return {
        type: actionTypes.MODIFY_POTENTIAL_QUANTITY,
        input: { ...input.cart, potentialQuantity: _potentialQuantity }
      };
    },
    modifyCart: input => {
      return dispatch => {
        let _accountId = input.accountId;
        let _cart = input.cart;
        let _items = _cart.items;
        let _action = input.action;
        let _max = input.max;

        let _productIdentifier = input.productIdentifier;
        let _product = input.product;

        let { _per, _amount } = (() => {
          if (_product == null) return {};
          let _amount = parseInt(_productIdentifier.replace(/\D/g, ""));
          return {
            _per: _product.wholesale[_product.size.indexOf(_amount)],
            _amount
          };
        })();

        let _coupon = input.coupon;
        let sale = (() => {
          if (_coupon == null) return undefined;

          if (_coupon.itemId == _product.sotiId || _coupon.type == "%") {
            if (_coupon.type == "%") {
              return _per * (1 - _coupon.amount / 100);
            } else if (_coupon.type == "$") {
              return Math.max(0, _per - _coupon.amount);
            }
          }
          return undefined;
        })();

        let _quantity = Math.min(input.quantity, _max);

        let _item, price;
        switch (_action) {
          case "REMOVE":
            _quantity = _items[_productIdentifier].quantity;
            delete _items[_productIdentifier];
            break;
          case "APPEND":
            if (_productIdentifier in _items) {
              _quantity += _items[_productIdentifier].quantity;
            }
            _quantity = Math.min(_quantity, _max);
            price = (sale == null ? _per : sale) * _quantity;
            _items[_productIdentifier] = {
              product: _product,
              quantity: _quantity,
              price,
              per: _per,
              sale,
              amount: _amount
            };
            break;
          case "MODIFY":
            _item = _items[_productIdentifier];
            _quantity = Math.min(Math.max(0, _quantity + _item.quantity), _max);
            price = (sale == null ? _per : sale) * _quantity;
            if (_quantity == 0) delete _items[_productIdentifier];
            else {
              _items[_productIdentifier] = {
                ..._item,
                quantity: _quantity,
                price,
                sale,
                per: _per
              };
            }
            break;
          case "SET":
            _quantity = Math.min(_quantity, _max);
            price = (sale == null ? _per : sale) * _quantity;
            _item = _items[_productIdentifier];
            _items[_productIdentifier] = {
              product: _product,
              amount: _amount,
              ..._item,
              quantity: _quantity,
              price,
              sale,
              per: _per
            };
          default:
        }

        let _price = Object.values(_items)
          .map(a => {
            if (isNaN(a.price)) return 0;
            return a.price;
          })
          .reduce((a, b) => {
            return a + b;
          }, 0);

        let _discount = (() => {
          if (_coupon == null) return 0;
          if (_coupon.type == "%") {
            return Object.values(_items)
              .map(a => {
                if (isNaN(a.price) || isNaN(a.sale)) return 0;
                return (a.per - a.sale) * a.quantity;
              })
              .reduce((a, b) => {
                return a + b;
              }, 0);
          } else if (_coupon.type == "$") {
            let _ = _coupon.amount;
            _price = Math.max(0, _price - _);
            return _;
          }
        })();

        let _obj = {
          ..._cart,
          items: _items,
          price: _price,
          discount: _discount
        };

        sessionStorage.setItem("cart", JSON.stringify(_obj));

        if (_accountId != null) {
          let remove = _action == "REMOVE";
          let item;

          if (remove) {
            item = {
              product: _product,
              quantity: _quantity,
              amount: _amount
            };
          } else {
            item = _items[_productIdentifier];
          }
          let Account = AccountActions(uri);
          let cartItem =
            (remove ? "R_" : "") +
            stringBuilder({
              product: item.product,
              quantity: item.quantity,
              packSize: item.amount
            });

          dispatch(Account.updateAccount({ _id: _accountId, cartItem }));
        }

        dispatch({
          type: actionTypes.MODIFY_CART,
          cart: _obj
        });
      };
    },
    processOrder: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        let { productList, productCodes } = buildProductList(input.cart.items);

        const operation = {
          query: mutation.postOrder,
          variables: { productCodes, productList, customerId: input.customerId }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let order = data.data.processOrder;
            dispatch(objects.clearCart(input._id));
          })
          .catch(error => console.log(error));
      };
    },
    clearCart: _id => {
      sessionStorage.removeItem("cart");
      return dispatch => {
        let Account = AccountActions(uri);
        dispatch(Account.updateAccount({ _id: _id, cartItems: [] }));
        dispatch({ type: actionTypes.CLEAR_CART });
      };
    }
  };

  return { ...objects };
};

let buildProductList = items => {
  let productList = [];
  let productCodes = [];
  for (let key of Object.keys(items)) {
    let item = items[key];
    let product = item.product;
    let _name = `${product.sotiId}${item.amount} - ${product.alias} ${
      product.genetic
    } Cannabis Seeds (${item.amount} Seeds)`;

    let company = companies[item.product.company.name];

    productList.push(
      `(${company}) ${_name}/&=>${item.quantity}/&=>${item.per * item.quantity}`
    );
    productCodes.push(
      stringBuilder({
        product: item.product,
        quantity: item.quantity,
        packSize: item.amount
      })
    );
  }

  return { productList: productList.toString(), productCodes };
};

let companies = {
  "sonoma seeds": "son",
  "crop king seeds": "cks",
  "sunwest genetics": "swg"
};

const query = {};

const mutation = {
  postOrder: gql`
    mutation(
      $customerId: String
      $productCodes: [String]
      $productList: [String]
    ) {
      createOrderInvoice(
        input: {
          customerId: $customerId
          productList: $productList
          productCodes: $productCodes
        }
      )
    }
  `
};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
