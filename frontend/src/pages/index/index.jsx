import React from 'react';
import Navbar from '../../components/common/navbar';
import Footer from '../../components/common/footer';
import CarouselIndex from '../../components/Carousel';
import CardProductos from '../../components/CardProductos';



const Index = () => {
    return (
     <>
      <Navbar/>
      <CarouselIndex/>
      <CardProductos/>
      <Footer/>
     </>
    )
}

export default Index;