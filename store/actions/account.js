import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  CHANGE_OPTION: "CHANGE_OPTION",
  VERIFY_CREDENTIALS: "VERIFY_CREDENTIALS",
  CREATE_ACCOUNT: "CREATE_ACCOUNT"
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
            console.log(account);
            dispatch({
              type: actionTypes.VERIFY_CREDENTIALS,
              account
            });
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
            console.log(account);
            dispatch({
              type: actionTypes.CREATE_ACCOUNT
            });
            return Promise.resolve(account);
          })
          .catch(error => console.log(error));
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
        name
        company
        phone
        website
        license
        approved
        admin
        address
        description
        jwt
        createdAt
      }
    }
  `,

  createAccount: gql`
    mutation(
      $password: String
      $email: String
      $company: String
      $name: String
      $phone: String
      $website: String
      $license: String
      $address: String
      $description: String
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
          address: $address
          description: $description
        }
      ) {
        _id
        email
        name
        company
        phone
        website
        license
        approved
        description
        address
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
