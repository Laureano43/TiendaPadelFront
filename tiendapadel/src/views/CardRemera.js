import '../css/Card.css';
import { useEffect, useState } from 'react';


const CardRemeraApp = () => {
    
    const[data,setData] = useState([])
    useEffect(() =>{
        fetch( 'https://apitiendadepadel.herokuapp.com/product/?categoria=Remera')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    return (
        <>

        <div class="cont-padre">
        {data.map((el) => 
                <div class="card">
                <div class="imagencontenedora">
                    <img src={el.imagen} class="card-img-top imagen" alt="..."></img>
                </div>
                <div class="card-body">
                    <p class="card-text">{el.descripcion}</p>
                    <p class="card-text precio">{el.precio}</p>
                    <a href=" " class="btn btn-primary">Comprar</a>
                </div>
            </div>        
        )}
        </div>
        </>
);    
};

export default CardRemeraApp;