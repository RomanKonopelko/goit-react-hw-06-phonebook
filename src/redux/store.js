import { createStore } from 'redux';
import { v4 as randomID } from 'uuid';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'app/addContact':
      const newContact = {
        id: randomID(),
        name: payload.name,
        number: payload.number,
      };
      console.log(newContact);
      const existedContact = state.contacts.filter(
        contact => contact.name === newContact.name || contact.number === newContact.number,
      );
      if (existedContact.length === 0) {
        return { ...state, contacts: [...state.contacts, newContact] };
      } else {
        alert('this contact or number already exist');
        return state;
      }

    case 'app/deleteContact':
      return { ...state, contacts: state.contacts.filter(contact => payload !== contact.id) };

    case 'app/getFilteredContact':
      console.log(state, 'state');
      const normalizeFilter = state.filter.toLowerCase();
      return state.contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(normalizeFilter) ||
          contact.number.includes(state.filter),
      );

    case 'app/addFilter':
      return {
        filter: payload,
      };

    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
