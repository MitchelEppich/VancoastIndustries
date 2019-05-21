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
  GET_ACCOUNTS: "GET_ACCOUNTS"
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
    changeAccountStatus: statusAndAccount => {
      console.log(statusAndAccount);
      return {
        type: actionTypes.CHANGE_ACCOUNT_STATUS
      };
    },
    searchAccounts: searchTerm => {
      return {
        type: actionTypes.SEARCH_ACCOUNTS,
        searchTerm: searchTerm
      };
    },
    sortAccounts: sortByIndex => {
      return {
        type: actionTypes.SORT_ACCOUNTS,
        sortByIndex: sortByIndex
      };
    },
    getAccounts: input => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });

        const operation = {
          query: mutation.getAccounts,
          variables: { ...input }
        };

        return makePromise(execute(link, operation))
          .then(data => {
            let accounts = data.data.getAccounts;
            dispatch({
              type: actionTypes.GET_ACCOUNTS,
              accounts: accounts
            });
          })
          .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {
  getAccounts: gql`
  query(){
    getAccounts(input: {}){
      
    }
  }`
};

const mutation = {};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
