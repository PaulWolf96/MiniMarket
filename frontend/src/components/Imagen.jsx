import React from 'react';
import { Instagram, Github, Whatsapp } from 'react-bootstrap-icons';





const Imagen = ({Foto}) => {
    return (
    <div className='col-11 col-md-4 border border-2 px-0 rounded rounded-2 mt-3 mt-md-0'>
          
            <div>
                <img src={Foto.foto} alt="" className='w-100'/>
            </div> 
            <div className='d-flex justify-content-evenly pb-1'>   
                <a href="" className='fs-1 link-dark'> <Instagram></Instagram> </a>
                <a href="" className='fs-1 link-dark'> <Github></Github> </a>
                <a href="" className='fs-1 link-dark'> <Whatsapp></Whatsapp> </a>
            </div>
    </div>
    );
};

export default Imagen;