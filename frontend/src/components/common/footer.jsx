import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/logo1.png';
import './footer.css';
import IgLogo from '../../img/instagramLogo.png';
import FaceLogo from '../../img/faceLogo.png';
import LinkLogo from '../../img/linkedinLogo.png';
import Row from 'react-bootstrap/Row';


const Footer = () => {
  return (
    <Container fluid className="containerFooter">
        <Row>
          <Col className="col1Footer"><a href="/home"><img src={Logo} alt="" width="110px" className="logoFooter"></img></a></Col>
          <Col className="col2Footer">
          <div className="redesFooter">
            <img src={IgLogo} alt="" width="50px" className="imgRedesFooter"></img>
            <img src={FaceLogo} alt="" width="50px" className="imgRedesFooter"></img>
            <img src={LinkLogo} alt="" width="50px" className="imgRedesFooter"></img>
          </div>
          </Col>
          <Col>
            <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link className="linksFooter" href="/home">Home</Nav.Link>
            <Nav.Link className="linksFooter" href="/quienessomos">Quienes Somos</Nav.Link>
            <Nav.Link className="linksFooter" href="/contacto">Contacto</Nav.Link>
            </Nav>
          </Col>
        </Row>
        
        <div className="container d-flex justify-content-center">
            <p className="copyright">
              Portions of this content are ©1998-2022 by individual
              contributors. Content available under a 
              <a href=""> Creative Commons license</a>.
            </p>
          </div>
    </Container>
  );
}

export default Footer;