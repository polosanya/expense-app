import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export type User = {
  id: number
  name: string
} | null

type LoginState = {
  user: User
}

const initialState: LoginState = {
  user: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    }
  }
})

export const loginReducer = loginSlice.reducer

export const stateLogin = (state: RootState) => state.login

export const { setUser, clearUser } = loginSlice.actions
