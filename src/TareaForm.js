import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") {
      setError(true);
      return;
    }
    if (texto.length > 50) {
      setError(true);
      return;
    }
    agregarTarea(texto);
    setTexto("");
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label="Añadir tarea ..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Agregar Tarea
      </Button>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          La tarea no puede estar vacía o exceder 50 caracteres.
        </Alert>
      </Snackbar>
    </form>
  );
}

export default TareaForm;
