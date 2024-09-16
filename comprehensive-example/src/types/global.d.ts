export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  isLoading: boolean;
  error: string | null;
  users: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}
