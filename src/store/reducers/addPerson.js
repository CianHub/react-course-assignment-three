import ACTIONS from "../actions/actions";

const initialState = {
  persons: []
};

const addPerson = (state = initialState, action) => {
  if (action.type === ACTIONS.ADD) {
    return { persons: state.persons.concat(action.newPerson) };
  }
  if (action.type === ACTIONS.REMOVE) {
    return { persons: state.persons.filter(person => person.id !== action.id) };
  }

  return { ...state };
};

export default addPerson;
