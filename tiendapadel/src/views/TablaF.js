import '../css/Tabla.css';
import { useEffect, useState } from 'react';

const TablaApp = () => {
    const[data,setData] = useState([])
 
    useEffect(() =>{
      fetch('https://apitiendadepadel.herokuapp.com/ranking/?genero=F')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    return (
        <>

        <div class="recuadro">
            <p class="titulo">Ranking Femenino </p>
        </div>

        <div class="tablaRanking" id="linkRanking">
            <div class="tablaRank">
        <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Posición</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Nacionalidad</th>
                    <th scope="col">Puntaje</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {data.map((el) => 
                    <><tr><th scope="row">{el.posicion}</th><td>{el.nombre}</td><td>{el.nacionalidad}</td><td>{el.puntos}</td></tr></>)}
                    
                </tbody>
        </table>
        </div>
        </div>

</>
);    
};

export default TablaApp;