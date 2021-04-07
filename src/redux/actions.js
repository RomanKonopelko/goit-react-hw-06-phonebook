export const addContact = value => {
  return {
    type: 'app/addContact',
    payload: value,
  };
};

export const deleteContact = id => {
  return {
    type: 'app/deleteContact',
    payload: id,
  };
};

export const getFilteredContact = () => {
  return {
    type: 'app/getFilteredContact',
    payload: null,
  };
};

export const getFilter = value => {
  return {
    type: 'app/getFilter',
    payload: value,
  };
};
