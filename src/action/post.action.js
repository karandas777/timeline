import { ADD_POST, GET_ALL_POST, APIURL, GET_SORTED_POST } from "./types";
import axios from "axios";

export const funAddPost = (message) => (dispatch) => {
  const method = "/insert-post";
  axios
    .post(APIURL + method, message)
    .then((res) => {
      if(res.data.status === "OK"){
        dispatch({
          type: ADD_POST,
          payload: res.data.message,
        });
      }
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
      if(res.data.status === "OK"){
      dispatch({
        type: GET_ALL_POST,
        payload: res.data.message.reverse(),
      });
    }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const funGetSortedPosts = (data) => (dispatch) => {
  const method = "/sort-post";
  const query = data;
  axios.post(APIURL + method,{query:query})
  .then((res)=>{
    dispatch({
      type:GET_SORTED_POST,
      payload:res.data.message.reverse(),
    })
  })
  .catch((err)=>{
    console.log(err);
  })
}