import { ThemeProvider } from '@mui/material';
import Auth from 'pages/Auth/Auth';
import ReactDOM from "react-dom/client";
import './index.css';
import { mainTheme } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById("root") || new HTMLElement
);

root.render(
  <ThemeProvider theme={mainTheme}>
    <Auth />
  </ThemeProvider>
);
