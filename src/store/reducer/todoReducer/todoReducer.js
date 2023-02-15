export const actionType = {
  ADD: "ADD",
  DELETE: "DELETE",
  COMPLATED: "COMPLATED",
  EDIT: "EDIT",
  DELETE_ALL: "DELETE_ALL",
};

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.ADD:
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload,
        },
      ];

    case actionType.DELETE:
      return state.filter((el) => el.id !== action.payload);

    case actionType.DELETE_ALL:
      return initialState
    

    case actionType.COMPLATED:
      return state.map((element) => {
        if (element.id === action.payload) {
          return {
            ...element,
            complated: !element.complated,
          };
        }
        return element;
      });
    case actionType.EDIT:
      return state.map((element) => {
        if (element.id === action.id) {
          return {
            ...element,
            title: action.payload,
          };
        }
        return element;
      });
    default:
      return state;
  }
};
