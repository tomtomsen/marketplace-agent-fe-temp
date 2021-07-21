import axios from 'axios';
import delay from '../tools/delay';

const host = 'https://private-b3485f-tomtomsenmarketplace.apiary-mock.com';
const defaultHeaders = {
  'Content-Type': 'application/json',
};

type TQuery = {
  id: string,
  query: string,
};

type TGetQueriesResponse = Array<TQuery>;

type TSettings = {
  providers: Array<string>;
};

type TGetUserResponse = {
  queries: Array<TQuery>,
  settings: TSettings,
};

type TPutQueryResponse = unknown;
type TDeleteQueryResponse = unknown;

const UserApi = {
  get: (): Promise<TGetUserResponse> => delay(
    axios
      .get(
        `${host}/user`,
        {
          headers: defaultHeaders,
        },
      )
      .then((r) => r.data),
  ),

  queries: {
    delete: (id: string): Promise<TDeleteQueryResponse> => delay(
      axios
        .delete(
          `${host}/user/query/${id}`,
          {
            headers: defaultHeaders,
          },
        ),
    ),

    get: (): Promise<TGetQueriesResponse> => axios
      .get(
        `${host}/user/queries`,
        {
          headers: defaultHeaders,
        },
      )
      .then((r) => r.data),

    put: (id: string, query: string): Promise<TPutQueryResponse> => delay(
      axios
        .put(
          `${host}/user/query/${id}`,
          {
            query,
          },
          {
            headers: defaultHeaders,
          },
        ),
    ),
  },
};

export default UserApi;
