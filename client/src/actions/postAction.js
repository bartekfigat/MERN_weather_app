import { FETCH_POSTS } from "./types";
import axios from "axios";
const back_end_api = "/index";

export const fetchPosts = () => dispatch => {
  axios
    .get(back_end_api)
    .then(res =>
      dispatch({
        type: FETCH_POSTS,
        payload: res.data
      })
    )
    .catch(error => {
      // handle error
      console.log(error);
    });
};
