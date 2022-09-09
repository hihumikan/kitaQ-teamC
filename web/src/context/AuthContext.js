import { createContext, useContext, useReducer, useEffect, useState } from "react"
import axios from "axios"
// import authApi from "../api/auth";

const AuthContext = createContext()
const AuthDispatchContext = createContext()

const authReducer = (user, action) => {
  switch (action.type) {
    case "auth/login":
      return action.user
    case "auth/logout":
      return null
    default:
      return user
    // case "auth/init":
    //   return action.user;
    // case "auth/add":
    //   return [...auths, action.auth];
    // case "auth/delete":
    //   return auths.filter((auth) => {
    //     return auth.id !== action.auth.id;
    //   });
    // case "auth/update":
    //   return action.user;
  }
}

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, null)
  const [testUser, setTestUser] = useState()

  // userのログインテストの時は、useEffectごとコメントアウトで切り替え

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const result = await axios.get("https://api.kitaq.qqey.net/login")
  //     const result = await axios.get("http://localhost:3001/login")
  //     setTestUser(result.data.user_data)
  //     // dispatch({ type: "auth/login", user: result.data.user_data })
  //   }
  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   authApi.get().then((user) => {
  //     dispatch({ type: "auth/init", user });
  //   });
  // }, []);

  return (
    <AuthContext.Provider value={testUser}>
      <AuthDispatchContext.Provider value={testUser}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)
const useDispatchAuth = () => useContext(AuthDispatchContext)

export { useAuth, useDispatchAuth, AuthProvider }
