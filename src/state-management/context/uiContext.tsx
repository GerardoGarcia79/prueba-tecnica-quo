import React from "react";
import { User } from "../../types/User";

interface UIContextType {
  openModal: boolean;
  selectedUser: User | null;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UIContext = React.createContext<UIContextType>({} as UIContextType);

export default UIContext;
