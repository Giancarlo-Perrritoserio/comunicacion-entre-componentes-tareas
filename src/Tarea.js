import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField, ListItemSecondaryAction } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save'; // Asegúrate de importar SaveIcon

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedText.trim() === "") return; // Validar que no esté vacío
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <TextField
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSaveClick}
          autoFocus
        />
      ) : (
        <ListItemText primary={tarea} />
      )}
      <ListItemSecondaryAction>
        {isEditing ? (
          <IconButton edge="end" onClick={handleSaveClick}>
            <SaveIcon />
          </IconButton>
        ) : (
          <>
            <IconButton edge="end" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
          </>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Tarea;
