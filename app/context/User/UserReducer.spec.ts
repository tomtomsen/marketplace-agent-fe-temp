/// <reference types="cypress" />
import UserReducer from './UserReducer';

describe('UserReducer', () => {
  const state = {
    error: false,
    loading: true,
    message: '',
    user: {
      queries: [
        {
          id: '1111-2222-3333-4444',
          searchTerm: 'my-search-term',
        },
        {
          id: '2222-3333-4444-5555',
          searchTerm: 'another-search-term',
        },
      ],
    },
  };

  it('add query', () => {
    const newState = UserReducer(
      state,
      {
        payload: {
          id: '3333-4444-5555-6666',
          searchTerm: 'new-search-term',
        },
        type: 'ADD_QUERY',
      },
    );

    expect(newState).to.deep.equals({
      error: false,
      loading: true,
      message: '',
      user: {
        queries: [
          ...state.user.queries,
          {
            id: '3333-4444-5555-6666',
            searchTerm: 'new-search-term',
          },
        ],
      },
    });
  });

  it('remove query', () => {
    const newState = UserReducer(state, {
      payload: '1111-2222-3333-4444',
      type: 'REMOVE_QUERY',
    });

    expect(newState).to.deep.equals({
      error: false,
      loading: true,
      message: '',
      user: {
        queries: [
          {
            id: '2222-3333-4444-5555',
            searchTerm: 'another-search-term',
          },
        ],
      },
    });
  });

  it('update query', () => {
    const newState = UserReducer(state, {
      payload: {
        id: '1111-2222-3333-4444',
        searchTerm: 'new-search-term',
      },
      type: 'UPDATE_QUERY',
    });

    expect(newState).to.deep.equals({
      error: false,
      loading: true,
      message: '',
      user: {
        queries: [
          {
            id: '1111-2222-3333-4444',
            searchTerm: 'new-search-term',
          },
          {
            id: '2222-3333-4444-5555',
            searchTerm: 'another-search-term',
          },
        ],
      },
    });
  });
});
