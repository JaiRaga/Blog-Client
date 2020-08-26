import { UPDATE_TRENDING, TRENDING_ERROR } from "../actions/types";

const initialState = {
  blog: null,
  blogs: [],
  openTrending: false,
  loading: true,
  errors: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TRENDING:
      return {
        ...state,
        openTrending: payload,
        loading: false
      };

    case TRENDING_ERROR:
      return {
        ...state,
        error: { trendingError: true },
        loading: false
      };

    default:
      return state;
  }
};
