export type IUser = {
  uid: string;
  name: string;
};

export type AuthenticationContextProps = IUser | null;
