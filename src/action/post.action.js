import { ADD_POST, GET_ALL_POST, APIURL } from "./types";
import axios from "axios";

export const funAddPost = (message) => (dispatch) => {
  const method = "/insert-post";
  axios
    .post(APIURL + method, message)
    .then((res) => {
      dispatch({
        type: ADD_POST,
        payload: res.data.message,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const funGetAllPosts = () => (dispatch) => {
  const method = "/select-post";
  axios
    .get(APIURL + method)
    .then((res) => {
      dispatch({
        type: GET_ALL_POST,
        payload: res.data.message.reverse(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
  window.scrollTo(0, 0);
};
