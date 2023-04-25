import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { ACTIONTYPE } from './constants';

const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case ACTIONTYPE.ADDCONTACTS:
      return [...state, action.payload];
    case ACTIONTYPE.DELETECONTACTS:
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case ACTIONTYPE.SETFILTER:
      return (state = action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
