import { ReactNode } from "react";

export type User = null | {
    id: number,
    name: string,
}

export type ProtectedRouteProps = {
    children: ReactNode;
    user: User;
}