// Página que mostra todas as informações de um restaurante

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { getRestauranteById } from "../api/restauranteApi";

export default function RestauranteDetalhes() {
  const { id } = useParams(); // Pega o ID da URL
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  // Carrega os dados do restaurante
  useEffect(() => {
    getRestauranteById(id).then(res => setRestaurant(res.data));
  }, [id]);

  if (!restaurant)
    return <Container sx={{ mt: 6 }}><Typography>Carregando...</Typography></Container>;

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>

        {/* Card principal com informações */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia component="img" height="300" image={restaurant.photo} />
            <CardContent>
              <Typography variant="h4">{restaurant.name}</Typography>
              <Typography sx={{ mt: 1 }}>{restaurant.description}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card lateral com botão para reservar */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Reservar mesa</Typography>
              <Button
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate(`/restaurantes/${id}/reservar`)}
              >
                Fazer reserva
              </Button>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  );
}
