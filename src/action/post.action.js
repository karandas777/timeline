import { ADD_POST, GET_ALL_POST, APIURL, GET_SORTED_POST, UPDATE_POST ,DELETE_POST } from "./types";
import axios from "axios";

const options = {
  headers : {
    "Content-Type": "application/json",
    "auth": localStorage.getItem('token'),
  }
}

export const funAddPost = (message) => (dispatch) => {
  const method = "/insert-post";
  axios
    .post(APIURL + method, message,options)
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
    .get(APIURL + method,options)
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
  axios.post(APIURL + method,{query:query},options)
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

export const funUpdatePost = (message) => (dispatch) => {
  const method = "/edit-post";
  axios
    .post(APIURL + method, message,options)
    .then((res) => {
      if(res.data.status === "OK"){
        dispatch({
          type: UPDATE_POST,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const funDeletePost = (message) => (dispatch) => {
  const method = "/remove-post";
  axios
    .post(APIURL + method, message,options)
    .then((res) => {
      if(res.data.status === "OK"){
        dispatch({
          type: DELETE_POST,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};