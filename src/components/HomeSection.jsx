// src/features/HomeSection.jsx
import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, CircularProgress } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";

import RestaurantCard from "../components/RestaurantCard";
import MapContainer from "../components/MapContainer";
import { mockRestaurantes } from "../mocks/MockRestaurantes";
import '../styles/HomeSection.css';

export default function HomeSection() {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [showMap, setShowMap] = useState(false); // controla exibição do mapa

    // Inicializa com mock
    useEffect(() => {
        setRestaurants(mockRestaurantes);
        setLoading(false);
    }, []);

    const filtered = (restaurants || []).filter(r =>
        r.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSearch = () => {
        setShowMap(true); // mostra o mapa após a busca
    };

    return (
        <Box className="home-container">
            <Box className="home-content">
                {/* Texto da home */}
                <Typography variant="h3" className="home-title">
                    Procurando uma reserva rápida?
                </Typography>
                <Typography variant="subtitle1" className="home-subtitle">
                    Reserve facilmente em restaurantes próximos a você.
                </Typography>

                {/* Caixa de busca */}
                <Box className="search-box">
                    <Box className="field-wrapper">
                        <TextField
                            label="Local"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <LocationOnIcon className="field-icon" />
                    </Box>

                    <Box className="field-wrapper">
                        <TextField
                            label="Data"
                            type="date"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <CalendarMonthIcon className="field-icon" />
                    </Box>

                    <Box className="field-wrapper">
                        <TextField
                            label="Hora"
                            type="time"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                        />
                        <AccessTimeIcon className="field-icon" />
                    </Box>

                    <Box className="field-wrapper">
                        <TextField
                            label="Pessoas"
                            select
                            variant="outlined"
                            size="small"
                            fullWidth
                            defaultValue={2}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                <MenuItem key={n} value={n}>
                                    {n} {n === 1 ? "pessoa" : "pessoas"}
                                </MenuItem>
                            ))}
                        </TextField>
                        <GroupIcon className="field-icon" />
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        className="search-button"
                        onClick={handleSearch}
                    >
                        Buscar
                    </Button>
                </Box>

                {/* Layout principal */}
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 2,
                            mt: 3,
                            alignItems: "flex-start",
                        }}
                    >
                        {/* Lista de restaurantes com scroll independente */}
<Box className="restaurant-list">
  {filtered.map(r => (
      <RestaurantCard key={r.id} restaurant={r} />
  ))}
</Box>

                        {/* Mapa fixo à direita */}
                        {showMap && (
                            <Box
                                sx={{
                                    width: { xs: "100%", md: "400px" },
                                    position: { xs: "relative", md: "sticky" },
                                    top: { md: "80px" },
                                }}
                            >
                                <MapContainer show={showMap} restaurants={filtered} />
                            </Box>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
}
