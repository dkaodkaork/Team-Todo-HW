// src/redux/modules/commentsReducer.js

// Action Value
const POST_COMMENT = "POST_COMMENT";
const GET_COMMENTS = "GET_COMMENTS";
const DELETE_COMMENT = "DELETE_COMMENT";
const PATCH_COMMENT = "PATCH_COMMENT";

// Action Creator

// Initial State
const initialState = {
  comments: [],
};

// Reducer 기본형태
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return { comments: [...state.comments, action.payload] };
    case GET_COMMENTS:
      return { ...state, comments: action.payload.data };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      }; //넘겨줄 payload 없음!
    case PATCH_COMMENT:
      return { ...state };
    default:
      return { ...state };
  }
};

// export default reducer
export default commentsReducer;
