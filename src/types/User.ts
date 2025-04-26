export interface User {
  id: number;
  name: string;
  gender: string;
  email: string;
  cell: string;
  image: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}
