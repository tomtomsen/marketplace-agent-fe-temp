import UserAPI from '../../api/UserAPI';

type TDispatch = (x: any) => void;
type TError = {
  status: string;
  message: string;
};
type TStatus = boolean;

// Set Loading
export const setLoading = (dispatch: TDispatch, status: TStatus): void => dispatch({ payload: status, type: 'SET_LOADING' });

// Set Error
export const setError = (dispatch: TDispatch, error: TError): void => dispatch({
  payload: { error: error.status, message: error.message },
  type: 'SET_ERROR',
});

export const getUser = async (dispatch: TDispatch): Promise<void> => {
  setLoading(dispatch, true);

  try {
    const user = await UserAPI.get();

    dispatch({
      payload: user,
      type: 'SET_USER',
    });
  } catch (error) {
    dispatch({
      payload: {
        error: true,
        message: error.message,
      },
      type: 'SET_ERROR',
    });
  } finally {
    setLoading(dispatch, false);
  }
};
