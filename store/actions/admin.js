import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  SET_ACCOUNT_VIEW: "SET_ACCOUNT_VIEW",
  HANDLE_STATUS_CHANGE_NOTE: "HANDLE_STATUS_CHANGE_NOTE",
  CHANGE_ACCOUNT_STATUS: "CHANGE_ACCOUNT_STATUS",
  SEARCH_ACCOUNTS: "SEARCH_ACCOUNTS",
  SORT_ACCOUNTS: "SORT_ACCOUNTS",
  GET_ACCOUNTS: "GET_ACCOUNTS",
  SHOW_ORDER_BY: "SHOW_ORDER_BY"
};

const getActions = uri => {
  const objects = {
    setAccountView: account => {
      return {
        type: actionTypes.SET_ACCOUNT_VIEW,
        currentAccount: account
      };
    },
    handleStatusChangeNote: note => {
      return {
        type: actionTypes.HANDLE_STATUS_CHANGE_NOTE,
        note: note
      };
    },
    changeAccountStatus: obj => {
      let account = obj.account;
      let accounts = obj.accounts;
      let index = accounts.findIndex(el => {
        el._id == account._id;
      });
      account.approved = obj.status;
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: mutation.updateAccount,
          variables: { ...account }
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
            accounts.splice(index, 1, account);
            dispatch({
              type: actionTypes.CHANGE_ACCOUNT_STATUS,
              accounts: accounts
            });
            return Promise.resolve(account);
          })
          .catch(error => console.log(error));
      };
    },
    searchAccounts: searchTerm => {
      return {
        type: actionTypes.SEARCH_ACCOUNTS,
        searchTerm: searchTerm
      };
    },
    sortAccounts: sortByIndex => {
      console.log(sortByIndex);
      return {
        type: actionTypes.SORT_ACCOUNTS,
        sortByIndex: sortByIndex
      };
    },
    getAccounts: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: query.account,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let accounts = data.data.account;
            dispatch({
              type: actionTypes.GET_ACCOUNTS,
              accounts: accounts
            });
          })
          .catch(error => console.log(error));
      };
    },
    toggleShowOrderBy: () => {
      return {
        type: actionTypes.SHOW_ORDER_BY
      };
    }
  };

  return { ...objects };
};
const query = {
  account: gql`
    query($jwt: String, $all: Boolean) {
      account(input: { jwt: $jwt, all: $all }) {
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
        error
        savedItems
        cartItems
      }
    }
  `
};

const mutation = {
  updateAccount: gql`
    mutation(
      $_id: String
      $approved: Int
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
          approved: $approved
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
