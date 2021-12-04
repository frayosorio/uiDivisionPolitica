import { Routes, Route } from 'react-router-dom'
import Inicio from '../vistas/Inicio'
import Monedas from '../vistas/Monedas'

const Rutas = () => {

    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/monedas' element={<Monedas />} />
        </Routes>
    );
}

export default Rutas;