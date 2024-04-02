import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './App.scss';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00742F',
      contrastText: '#FFF',
    },
  },
});

export const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};
