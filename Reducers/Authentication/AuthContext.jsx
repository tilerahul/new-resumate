import React, { createContext, useReducer, useContext, useEffect } from 'react';
import authReducer from './authReducer';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(token && user){
      dispatch({
        type : 'LOGIN',
        payload : {
          token,
          user : JSON.parse(user)
        }
      })
    }
  }, [])

  const login = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch({
      type: 'LOGIN',
      payload: { token, user }
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);