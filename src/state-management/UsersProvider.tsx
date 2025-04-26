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
      })
      .then((error) => console.log(error));
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
