import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Result, UsersApiResponse } from "../types/UsersApiResponse";

const UsersGrid = () => {
  const [users, setUsers] = useState<Result[]>([]);

  useEffect(() => {
    apiClient
      .get<UsersApiResponse>("/", {
        params: {
          results: 20,
        },
      })
      .then((response) => setUsers(response.data.results))
      .then((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>UsersGrid</h2>
      {users.map((user, index) => (
        <p key={user.id.name + "-" + index}>
          {user.name.first + " " + user.name.last}
        </p>
      ))}
    </div>
  );
};

export default UsersGrid;
