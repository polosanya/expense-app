import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type User = {
  id: number
  name: string
} | null

type UserState = {
  user: User
}

const initialState: UserState = {
  user: null
}

const userSlice = createSlice({
  name: 'user',
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

export const stateUser = (state: RootState) => state.user

export const { setUser, clearUser } = userSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
