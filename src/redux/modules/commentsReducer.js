// src/redux/modules/commentsReducer.js

// Action Value

// Action Creator

// Initial State
const initialState = {
  comments: [],
};

// Reducer 기본형태
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comments: action.payload.data };
    case "DELETE_COMMENT":
      return { ...state, comments: action.payload.data };
    default:
      return { ...state };
  }
};

// export default reducer
export default commentsReducer;
