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

const UserAPI = {
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

export default UserAPI;
