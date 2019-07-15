import ACTIONS from "../actions/actions";
const addPerson = (state, action) => {
  if (action.type === ACTIONS.ADD) {
    return { ...state };
  }
  if (action.type === ACTIONS.REMOVE) {
    return { ...state };
  }
};
