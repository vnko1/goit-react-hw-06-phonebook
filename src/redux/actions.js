import { nanoid } from 'nanoid';
import { ACTIONTYPE } from './constants';

export const addContacts = (name, number) => {
  return {
    type: ACTIONTYPE.ADDCONTACTS,
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};

export const deleteContacts = id => {
  return { type: ACTIONTYPE.DELETECONTACTS, payload: id };
};

export const setFilter = value => {
  return {
    type: ACTIONTYPE.SETFILTER,
    payload: value,
  };
};
