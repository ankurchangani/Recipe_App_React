const initialState = {
  login: false,
  user: null,
  loading: true, // Add a loading state
  error: null,
};



const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LoginSuccess':
      return { ...state, login: true, user: action.payload, loading: false };

    case 'RegisterSuccess':
      return { ...state, loading: false };

    case 'LogoutSuccess':
      return { ...state, login: false, user: null, loading: false };
      
    case 'LoginError':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
