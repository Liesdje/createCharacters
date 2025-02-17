import { useState, useEffect } from "react";
import { AppBar, Toolbar, Button, Menu, MenuItem, Grid, TextField, Box, Paper } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function CharacterSheet({ ruleset, setRuleset }) {
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/hello/getRuleset")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setRuleset(data.ruleset))
      .catch((error) => console.error("Error fetching data:", error));
  }, [setRuleset]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selected) => {
    if (selected) setRuleset(selected);
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <Button color="inherit">CUTEIMAGEN</Button>
          <Button color="inherit" onClick={handleClick}>D&D</Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose()}>
            <MenuItem onClick={() => handleClose("D&D 5e")}>D&D 5e</MenuItem>
            <MenuItem onClick={() => handleClose("D&D 4.5")}>D&D 4.5</MenuItem>
            <MenuItem onClick={() => handleClose("Other")}>Other option</MenuItem>
          </Menu>
          <Button color="inherit">Pathfinder</Button>
          <Button color="inherit">Anima</Button>
          <Button color="inherit">Vampiro</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* PDF Viewer */}
        <Grid item xs={6}>
          <Paper sx={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PictureAsPdfIcon fontSize="large" />
            <span style={{ marginLeft: 8 }}>PDF - {ruleset}</span>
          </Paper>
        </Grid>

        {/* Character Sheet Form */}
        <Grid item xs={6}>
          <TextField label="Nombre del Personaje" fullWidth margin="normal" />
          <TextField label="Clase y Nivel" fullWidth margin="normal" />
          <TextField label="Trasfondo" fullWidth margin="normal" />
          <TextField label="Raza" fullWidth margin="normal" />
          <TextField label="Alineamiento" fullWidth margin="normal" />
          <TextField label="Puntos de Experiencia" fullWidth margin="normal" />
        </Grid>
      </Grid>
    </Box>
  );
}
