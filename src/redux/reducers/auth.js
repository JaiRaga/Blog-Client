const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuthenticated: false,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
