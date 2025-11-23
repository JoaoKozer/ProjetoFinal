import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  if (!restaurant) return null;

  return (
    <Card
      sx={{
        display: "flex",
        mb: 2,
        borderRadius: 2,
        boxShadow: 3,
        width: "100%",         // ocupa toda a largura disponível da coluna
        maxWidth: 500,         // largura máxima para cada card
      }}
    >
      {/* Imagem do restaurante */}
      <CardMedia
        component="img"
        image={restaurant.photo || "/assets/FotoDefault.png"}
        alt={restaurant.name || "Restaurante"}
        sx={{
          width: 180,
          objectFit: "cover",
          borderRadius: "8px 0 0 8px",
        }}
      />

      {/* Conteúdo do card */}
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", p: 2 }}>
        <CardContent sx={{ p: 0, textAlign: "left" }}>
          <Typography variant="h6" gutterBottom>
            {restaurant.name || "Nome não disponível"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.address || "Endereço não disponível"}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 0, mt: 1 }}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => navigate(`/restaurantes/${restaurant.id}`)}
          >
            Ver detalhes
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}
