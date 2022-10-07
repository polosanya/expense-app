import { clearUser } from 'features/login/loginSlice'
import { Success } from 'pages/Auth/Success/Success'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

export const HomePage: FC = () => {
  const dispatch = useDispatch()

  return <Success buttonLabel="Logout" onClick={() => dispatch(clearUser())} />
}
