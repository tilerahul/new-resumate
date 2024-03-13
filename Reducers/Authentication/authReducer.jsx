const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token,
          user: action.payload.user
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          user: null
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  