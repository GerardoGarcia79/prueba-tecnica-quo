import { Result } from "../types/UsersApiResponse";
import { User } from "../types/User.ts";

export const UsersApiResultToUserMapper = (user: Result): User => ({
  // TODO: Fallback values
  id: user.login.uuid,
  name: user.name.title + " " + user.name.first + " " + user.name.last,
  gender: user.gender,
  email: user.email,
  cell: user.cell,
  address: {
    street: user.location.street.name + " " + user.location.street.number,
    city: user.location.city,
    country: user.location.country,
  },
  picture: {
    medium: user.picture.medium,
    large: user.picture.large,
  },
});
