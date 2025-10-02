export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional for when using OAuth
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserProfile {
  name?: string;
  email?: string;
}