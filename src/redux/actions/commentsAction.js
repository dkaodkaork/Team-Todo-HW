import axios from "axios";

const getComments = (paramsId) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(
      `http://localhost:3001/comments?todoId=${paramsId}`
    );
    console.log(data);
    dispatch({ type: "GET_COMMENTS", payload: { data } });
  };
};

const deleteComment = (commentId) => {
  return async (dispatch, getState) => {
    const { data } = await axios.delete(
      `http://localhost:3001/comments/${commentId}`
    );
    dispatch({ type: "DELETE_COMMENT", payload: { data } });
  };
};

export const commentsAction = { getComments, deleteComment };
