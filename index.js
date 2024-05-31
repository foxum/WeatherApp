import { AppRegistry } from "react-native"
import App from "./App"
import { name as appName } from "./app.json"
import { store } from "./src/app/store"
import React from "react"
import { Provider } from "react-redux"

AppRegistry.registerComponent(appName, () => () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
))
