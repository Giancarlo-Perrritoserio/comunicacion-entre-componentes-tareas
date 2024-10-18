import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import { Container, Typography, Button, AppBar, Toolbar, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now(), texto, completada: false, fecha: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = () => {
    const nuevasTareas = [...tareas].sort((a, b) => {
      return ordenAscendente
        ? new Date(a.fecha) - new Date(b.fecha)
        : new Date(b.fecha) - new Date(a.fecha);
    });
    setTareas(nuevasTareas);
    setOrdenAscendente(!ordenAscendente);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Lista de Tareas</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <TareaForm agregarTarea={agregarTarea} />
        <Filtros filtrarTareas={filtrarTareas} />
        <Button variant="contained" color="primary" onClick={ordenarTareas} style={{ marginBottom: '20px' }}>
          Ordenar por fecha ({ordenAscendente ? 'Ascendente' : 'Descendente'})
        </Button>
        <ListaTareas
          tareas={tareasFiltradas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
          toggleCompletada={toggleCompletada}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
