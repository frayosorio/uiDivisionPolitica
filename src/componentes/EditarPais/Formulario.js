import { obtenerEstilosModal } from '../../servicios/Listas';
import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Autocomplete } from '@material-ui/lab';

const Formulario = ({ cerrarFormulario, paisEditado }) => {

    const estilos = obtenerEstilosModal();

    const [id, setId] = useState(paisEditado.id);
    const [nombre, setNombre] = useState(paisEditado.nombre);
    const [codigoAlfa2, setCodigoAlfa2] = useState(paisEditado.codigoAlfa2);
    const [codigoAlfa3, setCodigoAlfa3] = useState(paisEditado.codigoAlfa3);
    const [continente, setContinente] = useState(paisEditado.continente);
    const [tipoRegion, setTipoRegion] = useState(paisEditado.tipoRegion);

    const guardar = (e) => {
        
    }

    const continentes = ["AFRICA", "AMERICA", "ANTARTIDA", "ASIA", "EUROPA", "OCEANIA"];
    const tiposRegiones = ["ESTADO", "DEPARTAMENTO", "PROVINCIA", "PREFECTURA"];


    return (
        <form className={estilos.base} onSubmit={guardar}>
            <TextField
                label="ID del país"
                variant="filled"
                required
                value={id}
                onChange={(e) => { setId(e.target.value) }}
            />
            <TextField
                label="Nombre del país"
                variant="filled"
                required
                value={nombre}
                onChange={(e) => { setNombre(e.target.value) }}
            />
            <TextField
                label="Código Alfa 2"
                variant="filled"
                required
                value={codigoAlfa2}
                onChange={(e) => { setCodigoAlfa2(e.target.value) }}
            />
            <TextField
                label="Código Alfa 3"
                variant="filled"
                required
                value={codigoAlfa3}
                onChange={(e) => { setCodigoAlfa3(e.target.value) }}
            />

            <Autocomplete
                value={continente}
                options={continentes}
                onChange={(e) => { setContinente(e.target.value) }}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Continente"
                        variant="outlined"
                        fullWidth

                    />
                )}
            />

            <Autocomplete
                value={tipoRegion}
                options={tiposRegiones}
                onChange={(e) => { setTipoRegion(e.target.value) }}
                renderInput={params => (
                    <TextField
                        {...params}
                        label="Tipo de Región"
                        variant="outlined"
                        fullWidth

                    />
                )}
            />

            <div>
                <Button variant="contained" onClick={cerrarFormulario}>
                    Cancelar
                </Button>
                <Button variant="contained" type="submit" color="Primary">
                    Aceptar
                </Button>
            </div>

        </form>
    );

}

export default Formulario;