import "bootstrap/dist/css/bootstrap.min.css";
import './AcercaDeNosotros.css';
import Descripcion from "../../components/Descripcion";
import Imagen from "../../components/Imagen";
import NavBar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import FotoFacundo from "../../img/Foto-Facundo.jpg";
import FotoPablo from "../../img/Foto-Pablo.jpg";

  
const AcercaDeNosotros= () => {
  const integrantes = [
     { nombre: "Facundo Jerez",
       foto: FotoFacundo, 
       instagram: "https://www.instagram.com/facundo.jrz/", 
       descripcion: "Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo",

    },
    { nombre: "Pablo Lobo",
       foto: FotoPablo,
       instagram: "", 
       descripcion: "Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo",

    },
    { nombre: "Diana Constanza",
       foto: "",
       instagram: "", 
       descripcion: "Somos una empresa familiar fundada en la ciudad de Córdoba en el año 2009. Nuestro principal capital invertido fue esfuerzo, trabajo y las ganas de superarnos día a día con la esperanza de crear una estructura sólida que nos permitiera hacer frente a los distintos desafíos que se nos podían presentar a lo largo del tiempo",

    }
  ]
    return (
      <>
      <NavBar/>
    <section className="container my-5 ">
      <h1 className="display-4 tituloQuienesSomos fw-bold text-center mb-5"> Acerca De Nosotros </h1>
    <article className="d-flex flex-wrap align-items-center bg-grisOscuro justify-content-around py-2"> 
      <Descripcion Integrante ={integrantes[0]}>
      </Descripcion>
      <Imagen Foto={integrantes[0]}>
      </Imagen>
    </article>
    <article className="d-flex flex-column-reverse flex-md-row flex-wrap align-items-center bg-gris justify-content-around py-2 my-3"> 
      <Imagen Foto={integrantes[1]}>
      </Imagen>
      <Descripcion Integrante ={integrantes[1]}>
      </Descripcion>
    </article>
    <article className="d-flex flex-wrap align-items-center bg-grisOscuro justify-content-around py-2"> 
      <Descripcion Integrante ={integrantes[2]}>
      </Descripcion>
      <Imagen Foto={integrantes[0]}>
      </Imagen>
    </article>
    
    </section>
    <Footer/>
    </>
  );
}


export default AcercaDeNosotros;
