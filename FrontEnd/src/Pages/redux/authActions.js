import axios from 'axios';

// Action Types
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action Creators
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const loginUser = (email, password) => async (dispatch) => {
  try {
    // Replace the URL with your backend authentication endpoint
    const response = await axios.post('http://your-backend-url/api/login', { email, password });
    const user = response.data;
    localStorage.setItem('email', user.email);
    dispatch(loginUserSuccess(user));
  } catch (error) {
    dispatch(loginUserFailure('Invalid Email or Password'));
    throw error;
  }
};

export const fetchProfile = () => async (dispatch) => {
  try {
    const email = localStorage.getItem('email');
    if (!email) {
      dispatch(logoutUser());
    } else {
      // Replace the URL with your backend profile endpoint
      const response = await axios.get(`http://your-backend-url/api/profile`, {
        params: { email },
      });
      const user = response.data;
      dispatch(loginUserSuccess(user));
    }
  } catch (error) {
    dispatch(logoutUser());
  }
};
