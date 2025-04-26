/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import UsersContext from "./context/usersContext";
import { User } from "../types/User";
import { getUsers } from "../utils/getUsers";
// import apiClient from "../services/api-client";
// import { UsersApiResponse } from "../types/UsersApiResponse";
// import { UsersApiResultToUserMapper } from "../utils/mapper";

interface Props {
  children: ReactNode;
}

const UsersProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    getUsers(
      setUsers,
      setFilteredUsers,
      setError,
      setIsLoading,
      controller.signal
    );

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      setFilteredUsers([...users]);
      return;
    }

    // Filter users
    const filtered = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchValue]);

  return (
    <UsersContext.Provider
      value={{ filteredUsers, searchValue, error, isLoading, setSearchValue }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
