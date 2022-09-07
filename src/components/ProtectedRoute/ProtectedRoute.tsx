import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ProtectedRouteProps } from './types';

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
    user,
    children,
    redirectPath = '/sign-in',
}) => {
    return user
        ? children ? <>{children}</> : <Outlet />
        : <Navigate to={redirectPath} replace />
}