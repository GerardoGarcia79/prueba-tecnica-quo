import React from "react";
import { User } from "../../types/User";

interface UsersContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = React.createContext({} as UsersContextType);

export default UsersContext;
