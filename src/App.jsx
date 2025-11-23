// src/App.jsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./theme/theme.js";
import MainPage from './pages/mainPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard.jsx';
import Header from './components/Navbar.jsx';
import Home from './components/HomeSection.jsx';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Header aparece em todas as páginas */}
        <Header/>

        {/* Rotas do sistema */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantes/:id" element={<RestaurantCard />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
