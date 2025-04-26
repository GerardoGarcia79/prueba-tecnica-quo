import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { UsersApiResponse } from "../types/UsersApiResponse";
import { UsersApiResultToUserMapper } from "../utils/mapper";
import { User } from "../types/User";
import UserCard from "./UserCard";

const UsersGrid = () => {
  // TODO: Move to Context
  const [users, setUsers] = useState<User[]>([]);

  // TODO: Move to Context
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
    <div className="max-w-[95%] sm:max-width-[90%] md:max-width-[80%] lg:max-width-[70%] text-[var(--text-text)] mx-auto">
      <div className="hidden md:grid grid-cols-4 font-bold gap-4 px-4 py-1 border-b-1 shadow-sm bg-white">
        <h2 className="table-header">Name</h2>
        <h2 className="table-header">Cell number</h2>
        <h2 className="table-header">Email</h2>
        <div className="flex justify-center">
          <h2 className="table-header">Details</h2>
        </div>
      </div>
      {users.map((user, index) => (
        <UserCard key={user.id + "-" + index} user={user} />
      ))}
    </div>
  );
};

export default UsersGrid;
