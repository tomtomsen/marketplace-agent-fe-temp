import { AxiosError } from 'axios';
import UserApi from '../../api/UserApi';

type TDispatch = (x: any) => void;

// Set Loading
export const setLoading = (dispatch: TDispatch, status: boolean): void => dispatch({ payload: status, type: 'SET_LOADING' });

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

export const deleteQuery = async (id: string, dispatch: TDispatch): Promise<void> => {
  dispatch({
    payload: {
      id,
      status: true,
    },
    type: 'SET_QUERY_LOADING',
  });

  dispatch({
    payload: {
      error: false,
      id,
    },
    type: 'SET_QUERY_ERROR',
  });

  try {
    await UserApi.queries.delete(id);

    dispatch({
      payload: id,
      type: 'REMOVE_QUERY',
    });
  } catch (error) {
    // if (axios.isAxiosError(error)) {
    dispatch({
      payload: {
        error: !!error,
        id,
        message: error.message,
      },
      type: 'SET_QUERY_ERROR',
    });
    // }
  } finally {
    dispatch({
      payload: {
        id,
        status: true,
      },
      type: 'SET_QUERY_LOADING',
    });
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
