import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import configureStore from './state/configureStore'
import './index.css'

injectTapEventPlugin()

const store = configureStore(window.__INITIAL_STATE__)

const RootNode = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<RootNode />, document.getElementById('root'))
