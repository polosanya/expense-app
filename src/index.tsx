import { ThemeProvider } from '@mui/material'
import { store } from 'app/store'
// import Auth from 'pages/Auth/Auth';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { DistributingRoute } from 'routes/DistributingRoute/DistributingRoute'
import './index.css'
import { mainTheme } from './themes'

const root = ReactDOM.createRoot(
  document.getElementById('root') || new HTMLElement()
)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <DistributingRoute />
    </ThemeProvider>
  </Provider>
)
