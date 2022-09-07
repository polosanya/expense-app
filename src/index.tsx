import { ThemeProvider } from '@mui/material';
import { NewPassword } from 'pages/Auth/NewPassword/NewPassword';
import { Reset } from 'pages/Auth/Reset/Reset';
import { SignIn } from 'pages/Auth/SignIn/SignIn';
import { SignUp } from 'pages/Auth/SignUp/SignUp';
import { Success } from 'pages/Auth/Success/Success';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './index.css';
// import Auth from './pages/Auth/Auth';
import { mainTheme } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById("root") || new HTMLElement
);

root.render(
  <ThemeProvider theme={mainTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="*" element={<Navigate to='/sign-in' />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
