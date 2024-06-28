import { useContext, createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  //const navigate = useNavigate();
  const login = (data) => {
    if (data) {
      const generatedToken = Date.now();
      setUser(data.username);
      setToken(generatedToken);
      localStorage.setItem("token", generatedToken);
      //navigate("/crud");
      return true;
      
    } else {
      console.log("errorlogin");
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    //navigate("/login");
    return "/login";
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
