import React from 'react';

const Descripcion = ({Integrante}) => {
    return (
        <div className='col-11 col-md-6'>
            <ul className='list-group'>
                <li className='list-group-item'><h2>{Integrante.nombre}</h2></li>
                <li className='list-group-item'>{Integrante.descripcion}</li>

            </ul>
        </div>
    );
};

export default Descripcion;