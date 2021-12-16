import { Button } from "@material-ui/core";
import { obtenerEstilos, listarPaises, Pais } from "../servicios/Listas";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import ModalEditar from '../componentes/EditarPais/Modal';
import Confirmacion from "../componentes/Confirmacion";

const columnas = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 300 },
    { field: "codigoAlfa2", headerName: "Código Alfa 2", width: 200 },
    { field: "codigoAlfa3", headerName: "Código Alfa 3", width: 200 },
    { field: "tipoRegion", headerName: "Tipo de Región", width: 200 },
    { field: "continente", headerName: "Continente", width: 200 },
]

const Paises = () => {

    const estilos = obtenerEstilos();

    //variable de estado que almacenará la lista de paises
    const [paises, setPaises] = useState([]);

    const obtenerPaises = async () => {
        const paisesT = await listarPaises();
        setPaises(paisesT);
        setEstadoListado(false);
    }

    const [estadoListado, setEstadoListado] = useState(true);

    if (estadoListado) {
        obtenerPaises();
    }

    var paisSeleccionado;

    const [paisEditado, setPaisEditado] = useState({});
    const [estadoModal, setEstadoModal] = useState(false);
    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    const agregar = () => {
        const paisE = new Pais(-1, "", "", "", -1, "", "");
        setPaisEditado(paisE);
        setEstadoModal(true);
    }

    const modificar = () => {
        if (paisSeleccionado) {
            const paisE = paisSeleccionado;
            setPaisEditado(paisE);
            setEstadoModal(true);
        }
        else {
            window.alert("Por favor seleccione el país a editar");
        }
    }

    const eliminar = () => {
        if (paisSeleccionado) {
            const paisE = paisSeleccionado;
            setPaisEditado(paisE);
            setEstadoConfirmacion(true);
        }
        else {
            window.alert("Por favor seleccione el país a eliminar");
        }
    }

    const cerrarModal = () => {
        setEstadoModal(false);
    }

    const cerrarConfirmacion = () => {
        setEstadoConfirmacion(false);
    }

    const aceptarConfirmacion = () => {

        setEstadoConfirmacion(false);
    }

    return (
        <div>
            <center>
                <h1>Lista de Paises</h1>
            </center>

            <div style={{ height: 500, width: "100%" }}>
                <Button className={estilos.botonAgregar} onClick={agregar}>
                    Agregar
                </Button>
                <Button className={estilos.botonModificar} onClick={modificar}>
                    Modificar
                </Button>
                <Button className={estilos.botonEliminar} onClick={eliminar}>
                    Eliminar
                </Button>

                <DataGrid
                    rows={paises}
                    columns={columnas}
                    pageSize={10}

                    onSelectionModelChange={(idPaises) => {
                        const paisesSeleccionados = paises.filter(
                            function (fila) {
                                return fila.id == idPaises[0];
                            }
                        );
                        paisSeleccionado = paisesSeleccionados[0];
                    }
                    }
                />
                <ModalEditar estado={estadoModal} cerrar={cerrarModal} pais={paisEditado} />

                <Confirmacion estado={estadoConfirmacion}
                    cerrar={cerrarConfirmacion}
                    aceptar={aceptarConfirmacion}
                    titulo={"Eliminando País"}
                    mensaje={"Está seguro?"}
                />
            </div>
        </div>
    )

}

export default Paises;