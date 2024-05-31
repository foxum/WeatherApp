import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../app/store"

interface SettingsState {
  isCelsius: boolean
}

const initialState: SettingsState = {
  isCelsius: true
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleIsCelsius: state => {
      state.isCelsius = !state.isCelsius
    }
  }
})

export const { toggleIsCelsius } = settingsSlice.actions

export const selectIsCelsius = (state: RootState) => state.settings.isCelsius

export default settingsSlice.reducer
