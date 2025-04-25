import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { UsersApiResponse } from "../types/UsersApiResponse";
import { UsersApiResultToUserMapper } from "../utils/mapper";
import { User } from "../types/User";

const UsersGrid = () => {
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
        console.log(users);

        setUsers([...users]);
      })
      .then((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>UsersGrid</h2>
      {users.map((user, index) => (
        <p key={user.id + "-" + index}>{user.name}</p>
      ))}
    </div>
  );
};

export default UsersGrid;
