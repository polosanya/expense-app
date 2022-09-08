import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRouteProps } from './types'

export const PrivateRoute: FC<PrivateRouteProps> = ({
  user,
  children,
  redirectPath = '/sign-in'
}) => {
  return user ? (
    children ? (
      <>{children}</>
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectPath} replace />
  )
}
