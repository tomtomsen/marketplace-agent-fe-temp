import { AxiosError } from 'axios';
import UserApi from '../../api/UserApi';
import { QueryConfiguration, QueryConfigurationId } from '../../types';

type TDispatch = (x: any) => void;

// Set Loading
export const setLoading = (dispatch: TDispatch, status: boolean): void => dispatch({ payload: status, type: 'SET_LOADING' });

export const setQueryLoading = (
  dispatch: TDispatch,
  id: QueryConfigurationId,
  status: boolean,
): void => dispatch({
  payload: {
    id,
    status,
  },
  type: 'SET_QUERY_LOADING',
});

export const setQueryError = (
  dispatch: TDispatch,
  id: QueryConfigurationId,
  error?: any,
): void => dispatch({
  payload: {
    error: !!error,
    id,
    message: error?.message,
  },
});

// Set Error
export const setError = (dispatch: TDispatch, error?: AxiosError): void => dispatch({
  payload: { error: !!error, message: error?.message },
  type: 'SET_ERROR',
});

const callApi = async (callback: () => Promise<void>, dispatch: TDispatch): Promise<void> => {
  setLoading(dispatch, true);
  setError(dispatch);

  try {
    await callback();
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    setError(dispatch, error);
    // }
  } finally {
    setLoading(dispatch, false);
  }
};

export const updateQuery = async (
  query: QueryConfiguration,
  dispatch: TDispatch,
): Promise<void> => {
  setQueryLoading(dispatch, query.id, true);
  setQueryError(dispatch, query.id, {
    error: false,
    message: '',
  });

  try {
    await UserApi.queries.put(query.id, query.searchTerm);
    throw new Error('X');

    dispatch({
      payload: query,
      type: 'UPDATE_QUERY',
    });
  } catch (error) {
    setQueryError(dispatch, query.id, {
      error: true,
      message: error.message,
    });
  } finally {
    setQueryLoading(dispatch, query.id, false);
  }
};

export const deleteQuery = async (id: string, dispatch: TDispatch): Promise<void> => {
  setQueryLoading(dispatch, id, true);
  setQueryError(dispatch, id, {
    error: false,
    message: '',
  });

  try {
    await UserApi.queries.delete(id);

    dispatch({
      payload: id,
      type: 'REMOVE_QUERY',
    });
  } catch (error) {
    setQueryError(dispatch, id, {
      error: true,
      message: error.message,
    });
  } finally {
    setQueryLoading(dispatch, id, false);
  }
};

export const getUser = async (dispatch: TDispatch): Promise<void> => callApi(
  async () => {
    const user = await UserApi.get();
    dispatch({
      payload: user,
      type: 'SET_USER',
    });
  },
  dispatch,
);

export const getUserOld = async (dispatch: TDispatch): Promise<void> => {
  setLoading(dispatch, true);

  try {
    const user = await UserApi.get();

    dispatch({
      payload: user,
      type: 'SET_USER',
    });
  } catch (error) {
    setError(dispatch, error);
  } finally {
    setLoading(dispatch, false);
  }
};
