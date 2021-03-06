import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import { stringBuilder } from "../../scripts/savedItems";

const actionTypes = {
  CHANGE_OPTION: "CHANGE_OPTION",
  VERIFY_CREDENTIALS: "VERIFY_CREDENTIALS",
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  CREATE_ACCOUNT_ERROR: "CREATE_ACCOUNT_ERROR",
  MODIFY_SAVED_ITEMS: "MODIFY_SAVED_ITEMS",
  UPDATE_ACCOUNT: "UPDATE_ACCOUNT",
  UPDATE_ERROR: "UPDATE_ERROR",
  RESET_PASSWORD: "RESET_PASSWORD",
  LOGOUT: "LOGOUT",
  SHOW_RECENT_ORDER: "SHOW_RECENT_ORDER",
  MODIFY_CART: "MODIFY_CART",
  DELETE_ADDRESS: "DELETE_ADDRESS",
  GET_ORDERS: "GET_ORDERS"
};

const getActions = uri => {
  const objects = {
    changeOption: option => {
      return {
        type: actionTypes.CHANGE_OPTION,
        option: option
      };
    },
    logout: () => {
      sessionStorage.removeItem("token");
      localStorage.removeItem("token");
      return {
        type: actionTypes.LOGOUT
      };
    },
    resetPassword: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.resetPassword,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            dispatch({
              type: actionTypes.RESET_PASSWORD
            });
          })
          .catch(error => console.log(error));
      };
    },
    verifyCredentials: credentials => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        let persistant = credentials.rememberMe;
        delete credentials.rememberMe;

        const operation = {
          query: mutation.verifyCredentials,
          variables: { ...credentials }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let account = data.data.verifyCredentials;
            if (account == null) {
              account = { error: "Invalid Email or Password" };
              sessionStorage.removeItem("token");
              localStorage.removeItem("token");
            }
            dispatch({
              type: actionTypes.VERIFY_CREDENTIALS,
              currentUser: account
            });

            if (persistant) {
              sessionStorage.removeItem("token");
              localStorage.setItem("token", account.jwt);
            } else {
              localStorage.removeItem("token");
              sessionStorage.setItem("token", account.jwt);
            }

            return Promise.resolve(account);
          })
          .catch(error => console.log(error));
      };
    },
    createAccount: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.createAccount,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let account = data.data.createAccount;
            if (account.error == null) {
              dispatch(objects.sendWholeSaleAppEmail(account));
            } else {
              dispatch({
                type: actionTypes.CREATE_ACCOUNT_ERROR,
                error: account.error
              });
            }
            return Promise.resolve(account);
          })
          .catch(error => console.log(error));
      };
    },
    clearAccountError: () => {
      return {
        type: actionTypes.CREATE_ACCOUNT_ERROR,
        error: null
      };
    },
    sendWholeSaleAppEmail: account => {
      let input = {
        subject: "New Wholesale Application!",
        company: account.company,
        name: account.address.name + " " + account.address.surname,
        email: account.email,
        type: "wholesale-application",
        body: account.description
      };
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.sendEmail,
          variables: { ...input }
        };

        makePromise(execute(link, operation))
          .then(data => {
            dispatch({
              type: actionTypes.CREATE_ACCOUNT
            });
          })
          .catch(error => console.log(error));
      };
    },
    updateAccount: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.updateAccount,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let account = data.data.updateAccount;
            if (account.error != null) {
              let error = account.error;
              dispatch({
                type: actionTypes.UPDATE_ERROR,
                error
              });
              return;
            }
            dispatch({
              type: actionTypes.UPDATE_ACCOUNT,
              currentUser: account
            });
            return Promise.resolve(account);
          })
          .catch(error => console.log(error));
      };
    },
    deleteAddress: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.deleteAddress,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let account = data.data.deleteAddress;
            if (account == null) return null;
            if (account.error != null) {
              let error = account.error;
              dispatch({
                type: actionTypes.UPDATE_ERROR,
                error
              });
              return;
            }
            dispatch({
              type: actionTypes.DELETE_ADDRESS,
              currentUser: account
            });
            return Promise.resolve(account);
          })
          .catch(error => console.log(error));
      };
    },
    modifySavedItems: input => {
      return dispatch => {
        let savedItem = (input.remove ? "R_" : "") + stringBuilder(input);

        dispatch(
          objects.updateAccount({ _id: input.currentUser._id, savedItem })
        );

        dispatch({
          type: actionTypes.MODIFY_SAVED_ITEMS
        });
      };
    },
    showRecentOrder: index => {
      return {
        type: actionTypes.SHOW_RECENT_ORDER,
        index: index
      };
    },
    getOrders: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: query.getOrders,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let orders = data.data.order.slice(0, 10);
            dispatch({
              type: actionTypes.GET_ORDERS,
              orders: orders
            });
          })
          .catch(error => console.log(error));
      };
    },
    reOrder: input => {
      return {
        type: actionTypes.MODIFY_CART,
        cart: input.cart
      };
    }
  };

  return { ...objects };
};
const query = {
  getOrders: gql`
    query($jwt: String, $customerId: String) {
      order(input: { jwt: $jwt, customerId: $customerId }) {
        _id
        customerId
        invoiceId
        orderDate
        productList
      }
    }
  `
};

const mutation = {
  verifyCredentials: gql`
    mutation($email: String, $password: String, $jwt: String) {
      verifyCredentials(
        input: { email: $email, password: $password, jwt: $jwt }
      ) {
        _id
        email
        password
        address {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        shipping {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        billing {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        company
        website
        license
        defaultShipping
        defaultBilling
        approved
        admin
        description
        jwt
        createdAt
        savedItems
        cartItems
        customerId
      }
    }
  `,
  sendEmail: gql`
    mutation(
      $type: String
      $name: String
      $phone: String
      $email: String
      $subject: String
      $body: String
    ) {
      sendEmail(
        input: {
          type: $type
          name: $name
          phone: $phone
          email: $email
          subject: $subject
          body: $body
        }
      )
    }
  `,
  createAccount: gql`
    mutation(
      $newPassword: String
      $password: String
      $email: String
      $company: String
      $website: String
      $license: String
      $description: String
      $address: AddressInput
      $shipping: [AddressInput]
      $billing: [AddressInput]
    ) {
      createAccount(
        input: {
          newPassword: $newPassword
          password: $password
          email: $email
          company: $company
          website: $website
          license: $license
          description: $description
          address: $address
          shipping: $shipping
          billing: $billing
        }
      ) {
        _id
        email
        password
        error
        address {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        shipping {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        billing {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        company
        website
        license
        approved
        admin
        description
        jwt
        createdAt
        defaultShipping
        defaultBilling
        savedItems
        cartItems
        customerId
      }
    }
  `,
  deleteAddress: gql`
    mutation($account: String, $_id: String) {
      deleteAddress(input: { _id: $_id, account: $account }) {
        _id
        email
        password
        address {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        shipping {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        billing {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        company
        website
        license
        approved
        admin
        defaultShipping
        defaultBilling
        description
        jwt
        createdAt
        savedItems
        cartItems
        customerId
      }
    }
  `,
  resetPassword: gql`
    mutation($email: String) {
      resetPassword(input: { email: $email })
    }
  `,
  updateAccount: gql`
    mutation(
      $_id: String
      $newPassword: String
      $password: String
      $email: String
      $company: String
      $website: String
      $license: String
      $description: String
      $address: AddressInput
      $shipping: [AddressInput]
      $billing: [AddressInput]
      $savedItem: String
      $cartItem: String
      $cartItems: [String]
      $defaultShipping: Int
      $defaultBilling: Int
    ) {
      updateAccount(
        input: {
          _id: $_id
          newPassword: $newPassword
          password: $password
          email: $email
          company: $company
          website: $website
          license: $license
          description: $description
          address: $address
          shipping: $shipping
          billing: $billing
          savedItem: $savedItem
          cartItem: $cartItem
          cartItems: $cartItems
          defaultShipping: $defaultShipping
          defaultBilling: $defaultBilling
        }
      ) {
        _id
        email
        password
        error
        address {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        shipping {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        billing {
          _id
          name
          surname
          phone
          address
          postal
          country
          apartment
          city
          state
          createdAt
        }
        defaultShipping
        defaultBilling
        company
        website
        license
        approved
        admin
        description
        jwt
        createdAt
        savedItems
        cartItems
        customerId
      }
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
