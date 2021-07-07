import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

export interface State {
    tick: string;
}

// create your reducer
const reducer = (state: State = {tick: 'init'}, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            const nextState = {
              ...state, // use previous state
              ...action.payload, // apply delta from hydration
            }
            if (state.tick) nextState.tick = state.tick // preserve tick value on client side navigation
            return nextState
        case 'TICK':
            return {...state, tick: action.payload};
        default:
            return state;
    }
};

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, {debug: true});