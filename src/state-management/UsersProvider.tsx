import { ReactNode, useEffect, useMemo, useState } from "react";
import UsersContext from "./context/usersContext";
import { User } from "../types/User";
import { getUsers } from "../utils/getUsers";

interface Props {
  children: ReactNode;
}

const UsersProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    getUsers(setUsers, setError, setIsLoading, controller.signal);

    return () => controller.abort();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!searchValue) return users;

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [users, searchValue]);

  const contextValue = useMemo(
    () => ({
      filteredUsers,
      searchValue,
      error,
      isLoading,
      openModal,
      selectedUser,
      setSearchValue,
      setOpenModal,
      setSelectedUser,
    }),
    [filteredUsers, searchValue, error, isLoading, openModal, selectedUser]
  );

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
