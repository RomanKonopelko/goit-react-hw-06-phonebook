import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('app/addContact');
export const deleteContact = createAction('app/deleteContact');
export const getFilter = createAction('app/getFilter');
