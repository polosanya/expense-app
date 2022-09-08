import { ReactNode } from 'react'

export type User = null | {
  id: number
  name: string
}

export type PrivateRouteProps = {
  children?: ReactNode
  user: User
  redirectPath?: string
}
