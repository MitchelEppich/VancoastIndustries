import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import { stringBuilder } from "../../scripts/savedItems";

const actionTypes = {
  CHANGE_OPTION: "CHANGE_OPTION",
  VERIFY_LOGIN: "VERIFY_LOGIN",
  CREATE_ACCOUNT: "CREATE_ACCOUNT",
  ADD_TO_WISH_LIST: "ADD_TO_WISH_LIST"
};

const getActions = uri => {
  const objects = {
    changeOption: option => {
      return {
        type: actionTypes.CHANGE_OPTION,
        option: option
      };
    },
    verifyLogin: credentials => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: query.getUsers
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let users = data.data.allUsers;
            dispatch({
              type: actionTypes.VERIFY_LOGIN
            });
            return Promise.resolve(users);
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
            return Promise.resolve(users);
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
  createAccount: gql`
    mutation(
      $password: String
      $email: String
      $company: String
      $name: String
      $phone: String
      $website: String
      $license: String
    ) {
      createAccount(
        input: {
          password: $password
          email: $email
          company: $company
          name: $name
          phone: $phone
          website: $website
          license: $license
        }
      ) {
        _id
        username
        email
        name
        company
        phone
        website
        license
        approved
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
