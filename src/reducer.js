export const initialState = {
  stories: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STORIES":
      return {
        ...state,
        stories: action.payload,
      };
    default:
      return state;
  }
};
