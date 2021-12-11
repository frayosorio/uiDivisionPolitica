import { Routes, Route } from 'react-router-dom'
import Inicio from '../vistas/Inicio'
import Monedas from '../vistas/Monedas'
import Paises from '../vistas/Paises'

const Rutas = () => {

    return (
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/monedas' element={<Monedas />} />
            <Route path='/paises' element={<Paises />} />
        </Routes>
    );
}

export default Rutas;