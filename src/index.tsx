import { ThemeProvider } from '@mui/material';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Auth from './pages/Auth/Auth';
import { mainTheme } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById("root") || new HTMLElement
);

root.render(
  <ThemeProvider theme={mainTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
