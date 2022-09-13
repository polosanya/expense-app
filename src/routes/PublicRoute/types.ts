import { User } from 'app/store'
import { ReactNode } from 'react'

export type PublicRouteProps = {
  children?: ReactNode
  user: User
  redirectPath?: string
}
