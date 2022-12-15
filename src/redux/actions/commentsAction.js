import axios from "axios";

const postComment = (paramsId, newComment) => {
  return async (dispatch, getState) => {
    //console.log(getState());
    await axios.post(
      `${process.env.REACT_APP_DB_URL}/todos/${paramsId}/comments`,
      newComment
    );
    dispatch({ type: "POST_COMMENT", payload: newComment });
  };
};

const getComments = (paramsId) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DB_URL}/comments?todoId=${paramsId}`
    );
    //console.log("getDate :", data);
    dispatch({ type: "GET_COMMENTS", payload: { data } });
  };
};

const deleteComment = (commentId) => {
  return async (dispatch, getState) => {
    await axios.delete(`${process.env.REACT_APP_DB_URL}/comments/${commentId}`);
    dispatch({ type: "DELETE_COMMENT", payload: commentId });
  };
};

const patchComment = (commentId, commentValue) => {
  return async (dispatch, getState) => {
    await axios.patch(`${process.env.REACT_APP_DB_URL}/comments/${commentId}`, {
      comment: commentValue,
    });
    dispatch({ type: "PATCH_COMMENT" });
  };
};

export const commentsAction = {
  postComment,
  getComments,
  deleteComment,
  patchComment,
};
