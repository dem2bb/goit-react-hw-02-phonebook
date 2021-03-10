import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) => {
    const index = state.findIndex(item => item.id === action.payload);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
