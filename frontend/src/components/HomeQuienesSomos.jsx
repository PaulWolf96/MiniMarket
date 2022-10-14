import { Button, Container } from "react-bootstrap";
import { Braces } from "react-bootstrap-icons";
import React from "react";



const HomeQuienesSomos = () => {
    return (
      
    <Container className="my-2" > 
      
    <h1 className="display-4 tituloQuienesSomos fw-bold text-center pb-1"> Quienes somos </h1>

     <article className="mx-auto my-3 border border-1 border-dark p-3 fs-6 ">
      <p className="lead">
        Somos una empresa orientada a la compra y venta de insumos informaticos
        desarrollada por estudiantes de la provincia de Tucumán. Nuestra
        principal caracteristíca es la Somos una empresa familiar fundada en
        la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido
        fue esfuerzo, trabajo y las ganas de superarnos día a día con la
        esperanza de crear una estructura sólida que nos permitiera hacer frente
        a los distintos desafíos que se nos podían presentar a lo largo del
        tiempo la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido.
        <br />
        {/* Somos una empresa familiar fundada en
        la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido
        fue esfuerzo, trabajo y las ganas de superarnos día a día con la
        esperanza de crear una estructura sólida que nos permitiera hacer frente
        a los distintos desafíos que se nos podían presentar a lo largo del
        tiempo.
        <br /><br />
         Inicialmente nuestro primer local se ubicaba en el garaje de una
        casa, local en el cual nos enfocábamos principalmente en brindar
        servicio técnico de computadoras. Con el pasar del tiempo fuimos
        incorporando distintos productos para su comercialización lo que nos
        llevó a ampliar nuestras instalaciones de ventas y fue así como luego de
        un año el local se traslado al domicilio donde se encuentra hoy en día.
        <br /><br />
        Apoyados en alianzas estratégicas con las principales marcas
        tecnológicas nos fuimos volviendo referentes del mercado, ampliando
        nuestra oferta a mas de 2.000 productos de última generación, los cuales
        mantenemos y renovamos día a día con el objetivo de trasladar a nuestros
        clientes la excelencia, calidad,innovación y vanguardia que nos exigimos
        en cada paso que damos. */}
      </p>
    </article>
    <div className="text-center mt-5 ">
        <a href="./AcercaDeNosotros"><Button variant="info" className=" text-white fs-4">
        Conoce a nuestros desarrolladores <Braces/>
        </Button></a>
    </div>
    
    </Container>
  

 );
};

export default HomeQuienesSomos;
