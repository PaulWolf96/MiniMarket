import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function CarouselIndex() {
    return (
        <>
            <header className="header">
                <h1>Mini Market</h1>
            </header>
            <div className="subheader">
                <p>El mejor lugar para publicar y comprar tecnología en tu ciudad</p>
            </div>

        <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.caracteristicas.co/wp-content/uploads/2018/10/internet-videojuegos-e1582283053628.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>Computadoras</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.tiemposur.com.ar/uploads/noticia_galeria/2022/01/24/file_129686_main1"
                        alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Celulares</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://internetpasoapaso.com/wp-content/uploads/beneficios-ps4-internet-800x400.jpg"
                        alt="First slide" />
                    <Carousel.Caption>
                        <h3>Consolas</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.quonty.com/blog/wp-content/uploads/2019/01/discos-duros-ssd-53.jpg"
                        alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Accesorios</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        
        </>


    );
}


export default CarouselIndex;