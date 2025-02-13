import {combineReducers, legacy_createStore} from 'redux';

import {counterReducer} from '../model/counterReducer';
import {loadState, saveState} from '../localStorage';

const rootReducer = combineReducers({
    counter: counterReducer,
})

let preloadedState = loadState('app-state')

export const store = legacy_createStore(rootReducer, preloadedState);
console.log(store)
store.subscribe(() => {
    saveState('app-state', store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch