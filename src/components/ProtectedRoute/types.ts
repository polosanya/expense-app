import { ReactNode } from "react";

export type User = null | {
    id: number,
    name: string,
    logout: (value: User | ((val: User) => User)) => void
}

export type ProtectedRouteProps = {
    children?: ReactNode;
    user: User;
    redirectPath?: string;
}