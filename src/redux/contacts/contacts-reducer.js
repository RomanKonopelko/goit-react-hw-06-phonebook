import { combineReducers } from 'redux';
import { v4 as randomID } from 'uuid';
import actionTypes from './contacts-types';

const { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } = actionTypes;

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const newContact = {
        id: randomID(),
        name: payload.name,
        number: payload.number,
      };
      console.log(newContact);
      const existedContact = state.filter(
        contact => contact.name === newContact.name || contact.number === newContact.number,
      );
      if (existedContact.length === 0) {
        return [...state, { ...newContact }];
      } else {
        alert('this contact or number already exist');
        return state;
      }

    case DELETE_CONTACT:
      return state.filter(contact => payload !== contact.id);

    default:
      return state;
  }
};

const contactsAppReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default contactsAppReducer;
