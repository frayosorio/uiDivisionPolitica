import { makeStyles } from "@material-ui/core";
import IniciarClienteApolo from "./IniciarClienteApolo";

import { gql } from "@apollo/client";

export const obtenerEstilos = makeStyles(tema => ({
    botonAgregar: {
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonModificar: {
        borderRadius: 15,
        backgroundColor: "#55ff55",
        padding: "10px 10px",
        fontSize: "18px"
    },
    botonEliminar: {
        borderRadius: 15,
        backgroundColor: "#ff5555",
        padding: "10px 10px",
        fontSize: "18px"
    }
}));

export const obtenerEstilosModal = makeStyles(tema => ({
    base: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: tema.spacing(2),

        '& .MuiTextField-root': {
            margin: tema.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: tema.spacing(2),
        },
    },
}));

export const Pais = function (id, nombre, codigoAlfa2, codigoAlfa3, tipoRegion, continente) {
    this.id = id;
    this.nombre = nombre;
    this.codigoAlfa2 = codigoAlfa2;
    this.codigoAlfa3 = codigoAlfa3;
    this.tipoRegion = tipoRegion;
    this.continente = continente;
}

export const listarPaises = async () => {

    const cliente = IniciarClienteApolo({ ruta: "http://localhost:3020/gqlpais" });

    const consulta = gql`{ obtenerPaises { id, nombre, continente, codigoAlfa2, codigoAlfa3, tipoRegion }}`;

    var paises = [];

    await cliente
        .query({ query: consulta })
        .then(({ error, data }) => {
            if (error) {
                throw new Error(error);
            }

            paises = data.obtenerPaises.map((item) => {
                return new Pais(
                    item.id,
                    item.nombre,
                    item.codigoAlfa2,
                    item.codigoAlfa3,
                    item.tipoRegion,
                    item.continente
                );
            });

        });

    return paises;

}

