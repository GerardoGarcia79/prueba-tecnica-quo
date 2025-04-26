import { UserAPIResponse } from "../types/UsersApiResponse";
import { User } from "../types/User.ts";

export const UsersApiResultToUserMapper = (user: UserAPIResponse): User => ({
  id: user.id ?? "unknown-id",
  name: `${user.firstName ?? "Unknown"} ${user.lastName || "User"}`,
  gender: user.gender ?? "Unknown",
  email: user.email ?? "Unknown",
  cell: user.phone || "No-phone",
  address: {
    street: user.address.address ?? "Unknown street",
    city: user.address.city ?? "Unknown city",
    country: user.address.country ?? "Unknown country",
  },
  image: user.image ?? "https://cdn-icons-png.flaticon.com/512/149/149071.png",
});
