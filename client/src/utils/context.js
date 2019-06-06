import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, currentUser: action.value };
    default:
      return;
  }
};

const initialState = { currentUser: null };

const UserContext = React.createContext(initialState);

function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
