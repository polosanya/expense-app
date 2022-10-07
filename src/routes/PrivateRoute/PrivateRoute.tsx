import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRouteProps } from './types'

export const PrivateRoute: FC<PrivateRouteProps> = ({
  user,
  children,
  redirectPath = '/sign-in'
}) => {
  if (!user) return <Navigate to={redirectPath} replace />

  return children ? <>{children}</> : <Outlet />
}
