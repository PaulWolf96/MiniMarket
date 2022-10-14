import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import '../pages/contacto/contacto.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
    return (

    <Container className='flex-grow-1 my-2'>
    
    <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3'> Sugerencias o Reclamos </h3>
    
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sugerencias</Accordion.Header>
        <Accordion.Body>
        <Form.Control type="text" placeholder="Nombre y Apellido" />
        <Form.Control type="email" placeholder="Email" />
        <FloatingLabel controlId="floatingTextarea1" label="Comentario">
        <Form.Control
          as="textarea"
          placeholder="Has un comentario"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Row>
        <Col xs={{ span: 9, offset: 9 }} sm={{ span: 0, offset: 0}}>
            <Button variant="primary" type="submit" size="sm">
            Enviar
            </Button>
        </Col>
      </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reclamos</Accordion.Header>
        <Accordion.Body>
        <Form.Control type="text" placeholder="Nombre y Apellido" />

        <Form.Control type="email" placeholder="Email" />
        <FloatingLabel controlId="floatingTextarea2" label="Comentario">
        <Form.Control
          as="textarea"
          placeholder="Has un comentario"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Row>
        <Col xs={{ span: 9, offset: 9 }} sm={{ span: 0, offset: 0}}>
            <Button variant="primary" type="submit" size="sm">
            Enviar
            </Button>
        </Col>
      </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Preguntas Frecuentes</Accordion.Header>
        <Accordion.Body>
            <div>
                <p><a href="#">¿Como puedo publicar mis productos?</a></p>
                <p><a href="#">No me llegó mi producto ¿Que Hago?</a></p>
                <p><a href="#">¿Puedo devolver un producto?</a></p>
              
            </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   
    </Container>
    

    );
    }

export default Contact;