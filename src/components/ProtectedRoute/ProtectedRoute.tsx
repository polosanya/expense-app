import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from './types';

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ user, children }) => {
    return user
        ? <>{children}</>
        : <Navigate to="/sign-in" replace />
}