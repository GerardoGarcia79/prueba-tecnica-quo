import { AxiosError, CanceledError } from "axios";
import apiClient from "../services/api-client";
import { User } from "../types/User";
import { UsersApiResponse } from "../types/UsersApiResponse";
import { UsersApiResultToUserMapper } from "./mapper";

export const getUsers = (
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  signal: AbortSignal
) => {
  apiClient
    .get<UsersApiResponse>("/", {
      params: {
        results: 20,
      },
      signal,
    })
    .then((response) => {
      const users = response.data.results.map((user) =>
        // Transform User type from Api Response to a local User type
        UsersApiResultToUserMapper(user)
      );

      setUsers([...users]);
      setIsLoading(false);
    })
    .catch((error) => {
      const err = error as AxiosError;
      if (err instanceof CanceledError) return;
      setError(error.message);
      setIsLoading(false);
    });
};
