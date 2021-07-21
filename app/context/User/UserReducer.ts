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
