import Navbar from '../../components/common/navbar';
import Footer from '../../components/common/footer';
import "bootstrap/dist/css/bootstrap.min.css"
import './quienessomos.css';
import HomeQuienesSomos from "../../components/HomeQuienesSomos"



const QuienesSomos = () => {
    return (
     <>
      <Navbar/>
      <HomeQuienesSomos/>
      <Footer/>
     </>
    )
}

export default QuienesSomos;