import React from 'react';
import { List } from '@mui/material';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  return (
    <List>
      {tareas.map((tarea, index) => (
        <Tarea
          key={tarea.id}
          tarea={tarea.texto}
          completada={tarea.completada}
          onDelete={() => eliminarTarea(index)}
          onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
          onToggleCompletada={() => toggleCompletada(index)}
        />
      ))}
    </List>
  );
}

export default ListaTareas;
