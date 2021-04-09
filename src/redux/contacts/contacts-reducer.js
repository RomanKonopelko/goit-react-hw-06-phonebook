import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { v4 as randomID } from 'uuid';
import * as actions from './contacts-actions';
const filterReducer = createReducer('', {
  [actions.getFilter]: (_, { payload }) => payload,
});

const contactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const newContact = {
      id: randomID(),
      name: payload.name,
      number: payload.number,
    };
    const existedContact = state.filter(
      contact => contact.name === newContact.name || contact.number === newContact.number,
    );
    if (existedContact.length === 0) {
      return [...state, { ...newContact }];
    } else {
      alert('this contact or number already exist');
      return state;
    }
  },
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => payload !== id),
});

const contactsAppReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default contactsAppReducer;
