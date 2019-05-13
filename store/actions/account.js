import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import { stringBuilder } from "../../scripts/savedItems";

const actionTypes = {
  CHANGE_OPTION: "CHANGE_OPTION",
  VERIFY_CREDENTIALS: "VERIFY_CREDENTIALS",
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  ADD_TO_WISH_LIST: "ADD_TO_WISH_LIST",
  UPDATE_ACCOUNT: "UPDATE_ACCOUNT",
  UPDATE_ERROR: "UPDATE_ERROR"
};

const getActions = uri => {
  const objects = {
    changeOption: option => {
      return {
        type: actionTypes.CHANGE_OPTION,
        option: option
      };
    },
    verifyCredentials: credentials => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.verifyCredentials,
          variables: { ...credentials }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let account = data.data.verifyCredentials;
            if (account == null)
              account = { error: "Invalid Email or Password" };
            dispatch({
              type: actionTypes.VERIFY_CREDENTIALS,
              currentUser: account
            });
            console.log(account);
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
            dispatch({
              type: actionTypes.CREATE_ACCOUNT
            });
            return Promise.resolve(account);
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
            console.log(account);
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
    addToWishList: input => {
      let savedItem = stringBuilder(input);

      //send to db here

      return {
        type: actionTypes.ADD_TO_WISH_LIST,
        currentUser: {
          ...input.currentUser,
          savedItems: [...input.currentUser.savedItems, savedItem]
        }
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {
  verifyCredentials: gql`
    mutation($email: String, $password: String) {
      verifyCredentials(input: { email: $email, password: $password }) {
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
        description
        jwt
        createdAt
      }
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
      }
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
