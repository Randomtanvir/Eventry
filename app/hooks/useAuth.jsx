import { useContext } from "react";
import { AuthContext } from "../contexs";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
