import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CardProductos = () => {
    return (
        <div>
             <Row className='justify-content-around mx-0'>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col xs={12} md={5} className='my-3' >
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                     lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                 ))}
            </Row>

        
            <Card className="text-center">
                <Card.Header>¡Únete!</Card.Header>
                <Card.Body>
                    <Card.Title>Suscríbete y entérate de las últimas novedades.</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>

            
        </div>
    );
};

export default CardProductos;