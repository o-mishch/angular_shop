export interface Product {
  id?: string;
  type: string;
  title: string;
  photo: string;
  info: string;
  price: number;
  date: Date;
}

export interface FbResponseToken {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

export interface User {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface FbResponse {
  name: string;
}

export interface Order {
  id?: string;
  name: string;
  phone: string;
  address: string;
  payment: string;
  orders: Product[];
  price: number;
  date: Date;
}
