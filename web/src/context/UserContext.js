import { createContext, useContext, useReducer, useEffect } from "react";
import userApi from "../api/user";

const UserContext = createContext();
const UserDispatchContext = createContext();

const usersList = [];

const userReducer = (users, action) => {
  switch (action.type) {
    case "user/init":
      return [...action.users];
    case "user/add":
      return [...users, action.user];
    case "user/delete":
      return users.filter((user) => {
        return user.id !== action.user.id;
      });
    case "user/update":
      return users.map((_user) => {
        return _user.id === action.user.id
          ? { ..._user, ...action.user }
          : { ..._user };
      });
    default:
      return users;
  }
};

const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, usersList);

  useEffect(() => {
    userApi.getAll().then((users) => {
      dispatch({ type: "user/init", users });
    });
  }, []);

  return (
    <UserContext.Provider value={users}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);
const useDispatchUsers = () => useContext(UserDispatchContext);

export { useUsers, useDispatchUsers, UserProvider };
