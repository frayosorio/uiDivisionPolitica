import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, Box, Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const Confirmacion = ({ estado, cerrar, titulo, mensaje, aceptar }) => {

    return (
        <Dialog open={estado} onClose={cerrar} maxWidth="sm" fullWidth>
            <DialogTitle>{titulo}</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton onClick={cerrar}>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>
                    {mensaje}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button color="secondary" variant="contained" onClick={cerrar}>No </Button>
                <Button color="primary" variant="contained" onClick={() => {
                    if (aceptar) {
                        aceptar();
                    }
                    cerrar();
                }}>Sí </Button>
            </DialogActions>
        </Dialog>
    )

}

export default Confirmacion;