import { ReactNode } from 'react'

export type User = null | {
  id: number
  name: string
}

export type PublicRouteProps = {
  children?: ReactNode
  user: User
  redirectPath?: string
}
