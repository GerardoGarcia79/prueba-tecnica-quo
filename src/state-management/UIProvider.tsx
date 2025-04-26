import { ReactNode, useMemo, useState } from "react";
import UIContext from "./context/uiContext";
import { User } from "../types/User";

interface Props {
  children: ReactNode;
}

const UIProvider = ({ children }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const contextValue = useMemo(
    () => ({
      openModal,
      selectedUser,
      setOpenModal,
      setSelectedUser,
    }),
    [openModal, selectedUser]
  );

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export default UIProvider;
