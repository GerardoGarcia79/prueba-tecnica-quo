import React from "react";
import { User } from "../../types/User";

interface UsersContextType {
  filteredUsers: User[];
  searchValue: string;
  error: string;
  isLoading: boolean;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const UsersContext = React.createContext({} as UsersContextType);

export default UsersContext;
