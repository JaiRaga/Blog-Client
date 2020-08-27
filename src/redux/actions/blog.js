import { UPDATE_TRENDING, TRENDING_ERROR } from "./types";

export const toggleTrending = (open) => async (dispatch) => {
  try {
    console.log(open);
    dispatch({ type: UPDATE_TRENDING, payload: open });
  } catch (err) {
    dispatch({ type: TRENDING_ERROR });
  }
};
