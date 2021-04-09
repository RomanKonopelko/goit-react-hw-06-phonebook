import actionTypes from './contacts-types';

const { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS, SET_FILTER } = actionTypes;

export const addContact = value => {
  return {
    type: ADD_CONTACT,
    payload: value,
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const getFilteredContact = () => {
  return {
    type: FILTER_CONTACTS,
  };
};

export const getFilter = value => {
  return {
    type: SET_FILTER,
    payload: value,
  };
};
