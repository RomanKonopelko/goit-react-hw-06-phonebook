import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import contactsAppReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contactsApp: contactsAppReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
