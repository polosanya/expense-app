import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PublicRouteProps } from './types';

export const PublicRoute: FC<PublicRouteProps> = ({
    user,
    children,
    redirectPath = '/home',
}) => {
    return user
        ? <Navigate to={redirectPath} replace />
        : children ? <>{children}</> : <Outlet />
}
