import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

function Filtros({ filtrarTareas }) {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" style={{ marginBottom: '20px' }}>
      <Button onClick={() => filtrarTareas("Todas")}>Todas</Button>
      <Button onClick={() => filtrarTareas("Pendientes")}>Pendientes</Button>
      <Button onClick={() => filtrarTareas("Completadas")}>Completadas</Button>
    </ButtonGroup>
  );
}

export default Filtros;
