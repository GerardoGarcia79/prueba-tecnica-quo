import React from "react";
import { User } from "../../types/User";

interface UsersContextType {
  filteredUsers: User[];
  searchValue: string;
  error: string;
  isLoading: boolean;
  openModal: boolean;
  selectedUser: User | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UsersContext = React.createContext({} as UsersContextType);

export default UsersContext;
