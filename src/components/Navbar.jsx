// Componente responsável pelo cabeçalho da aplicação
// Contém título, busca e link para Minhas Reservas

import { AppBar, Toolbar, Typography, Box, TextField, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // Barra superior fixa
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* Título clicável que leva para a Home */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ color: "white", textDecoration: "none", flexGrow: 1 }}
        >
          ReservaMesa
        </Typography>

        {/* Campo de busca (ainda não funcional, visual apenas) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField size="small" placeholder="Buscar restaurante" sx={{ bgcolor: "white", borderRadius: 1 }} />
          <IconButton color="inherit"><SearchIcon /></IconButton>
        </Box>

        {/* Link para a página Minhas Reservas */}
        <Button color="inherit" component={Link} to="/minhas-reservas" sx={{ ml: 2 }}>
          Minhas Reservas
        </Button>
      </Toolbar>
    </AppBar>
  );
}
