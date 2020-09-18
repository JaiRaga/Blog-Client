import axios from "axios";
import {
  GET_BLOGS,
  UPDATE_TRENDING,
  TRENDING_ERROR,
  GET_BLOG_ERROR
} from "./types";

export const getBlogs = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/blogs");
    dispatch({ type: GET_BLOGS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_BLOG_ERROR });
  }
};

export const toggleTrending = (open) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_TRENDING, payload: open });
  } catch (err) {
    dispatch({ type: TRENDING_ERROR });
  }
};
