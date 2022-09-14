import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { registerAPI, RegisterData } from 'api/api'
import { RootState } from 'app/store'

export type User = {
  id: number
  username: string
  displayName: string
  admin: boolean
} | null

type RegisterState = {
  user: User
}

const initialState: RegisterState = {
  user: null
}

type registerThunkPayload = {
  id: number
  username: string
  displayName: string
  admin: false
}

const registerSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      signUp.fulfilled,
      (state, { payload }: PayloadAction<registerThunkPayload>) => {
        state.user = {
          id: payload.id,
          username: payload.username,
          displayName: payload.displayName,
          admin: payload.admin
        }
      }
    )
  }
})

export const signUp = createAsyncThunk(
  'register/signUp',
  async (userData: RegisterData, thunkAPI) => {
    try {
      const response = await registerAPI(userData)
      console.log(
        response.data.id,
        response.data.username,
        response.data.displayName,
        response.data.admin
      )

      return { ...response.data }
    } catch (e) {
      return thunkAPI.rejectWithValue('Error')
    }
  }
)

export const registerReducer = registerSlice.reducer

export const stateRegister = (state: RootState) => state.register

export const { setUser, clearUser } = registerSlice.actions
