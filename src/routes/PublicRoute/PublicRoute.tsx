import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRouteProps } from './types'

export const PublicRoute: FC<PublicRouteProps> = ({
  user,
  children,
  redirectPath = '/home'
}) => {
  if (user) return <Navigate to={redirectPath} replace />

  return children ? <>{children}</> : <Outlet />
}
