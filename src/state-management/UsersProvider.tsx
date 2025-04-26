/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import UsersContext from "./context/usersContext";
import { User } from "../types/User";
import apiClient from "../services/api-client";
import { UsersApiResponse } from "../types/UsersApiResponse";
import { UsersApiResultToUserMapper } from "../utils/mapper";

interface Props {
  children: ReactNode;
}

const UsersProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    apiClient
      .get<UsersApiResponse>("/", {
        params: {
          results: 20,
        },
      })
      .then((response) => {
        const users = response.data.results.map((user) =>
          // Transform User type from Api Response to a local User type
          UsersApiResultToUserMapper(user)
        );

        setUsers([...users]);
        setFilteredUsers([...users]);
      })
      .then((error) => console.log(error));
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
      value={{ filteredUsers, searchValue, setSearchValue }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
