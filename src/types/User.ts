export interface User {
  id: string;
  name: string;
  gender: string;
  email: string;
  cell: string;
  picture: {
    medium: string;
    thumbnail: string;
  };
  address: {
    street: string;
    city: string;
    country: string;
  };
}
