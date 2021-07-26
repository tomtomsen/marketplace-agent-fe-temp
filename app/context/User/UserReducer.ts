import { QueryConfiguration } from '../../types';
import { TUserState } from './UserContext';

type TQuery = string;

type TUser = {
  name: string;
  queries: Array<TQuery>;
};

type TError = {
  error: boolean;
  message: string;
};

type TLoading = boolean;

type TAction = {
  type: string;
  payload: TUser | TError | TLoading | any;
};

const reducer = (state: TUserState, action: TAction): any => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'REMOVE_QUERY':
      return {
        ...state,
        user: {
          ...state.user,
          queries: state.user.queries.filter((q: QueryConfiguration) => q.id !== action.payload),
        },
      };
    case 'SET_QUERY_LOADING':
      return {
        ...state,
        user: {
          ...state.user,
          queries: state.user.queries.map((q: QueryConfiguration) => (
            q.id === action.payload.id ? {
              ...q,
              loading: action.payload.status,
            } : q
          )),
        },
      };
    case 'SET_QUERY_ERROR':
      return {
        ...state,
        user: {
          ...state.user,
          queries: state.user.queries.map((q: QueryConfiguration) => (
            q.id === action.payload.id ? {
              ...q,
              error: action.payload.error,
              message: action.payload.message,
            } : q
          )),
        },
      };
    case 'ADD_QUERY':
      return {
        ...state,
        user: {
          ...state.user,
          queries: [
            ...state.user.queries,
            action.payload,
          ],
        },
      };
    case 'UPDATE_QUERY':
      return {
        ...state,
        user: {
          ...state.user,
          queries: [
            ...state.user.queries.map((q: QueryConfiguration) => (
              q.id === action.payload.id ? action.payload : q
            )),
          ],
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
