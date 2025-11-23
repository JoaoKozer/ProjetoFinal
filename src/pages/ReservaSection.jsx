// Página com o formulário para criar uma reserva

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
import { createReserva } from "../api/restauranteApi";

export default function FazerReserva() {
  const { id } = useParams(); // ID do restaurante
  const navigate = useNavigate();

  // Estados do formulário
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(2);

  // Envia a reserva para o backend
  const submit = async (e) => {
    e.preventDefault();
    await createReserva({ restauranteId: id, date, time, people });
    navigate("/minhas-reservas"); // Redireciona após salvar
  };

  return (
    <Container sx={{ mt: 4 }} maxWidth="sm">
      <Typography variant="h5">Fazer reserva</Typography>

      <Box component="form" onSubmit={submit} sx={{ display: "grid", gap: 2, mt: 2 }}>
        <TextField type="date" label="Data" InputLabelProps={{ shrink: true }} value={date} onChange={e => setDate(e.target.value)} />
        <TextField type="time" label="Hora" InputLabelProps={{ shrink: true }} value={time} onChange={e => setTime(e.target.value)} />
        <TextField type="number" label="Pessoas" value={people} onChange={e => setPeople(e.target.value)} />

        <Button variant="contained" type="submit">Confirmar</Button>
      </Box>
    </Container>
  );
}
