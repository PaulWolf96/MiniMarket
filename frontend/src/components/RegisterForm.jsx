import { Button, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const { registerUser } = require("../services/apiCall");




const Register = () => {

  
  const [userFormData, setUserFormData] = useState({
    username: "",
    passsword: "",
    email: "",
  });
 

  /**
   * 
   * @param {*} event
   */
  const handleInputChange = (event) => {
    setUserFormData({
      ...userFormData,
      [event.target.name]: event.target.value,
    });
  };


  const history = useHistory(); 
  
  /**
   * 
   * @param {*} event
   */
    
  const handleSubmit = (event) => {
    
    event.preventDefault();
    registerUser(userFormData).then((response) => {
      if (response.status === 200) {
        console.log(response);
        history.push("/");
      }
    });
  };


  return (
    <Container className="my-2">
        
        <section>
            
            <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3'> Registrarse </h3>
            <Form className="mb-5" onSubmit={handleSubmit}  >
                <Form.Group class="mb-3">
                    <Form.Label for="username" >Nombre de usuario</Form.Label>
                    <Form.Control type="text"  id="inputName" name="username" onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label for="password">Contraseña</Form.Label>
                    <Form.Control type="password" id="inputPassword" name="password" onChange={handleInputChange}></Form.Control>
                </Form.Group>
                <Form.Group class="mb-3">
                    <Form.Label for="email" >Email</Form.Label>
                    <Form.Control type="email"  id="inputEmail" name="email" onChange={handleInputChange}></Form.Control>
                    <Form.Text> Nunca compartiremos su correo electrónico con alguien mas.</Form.Text>
                </Form.Group>
                <Button type="submit" variant="info" className="text-white" size="lg"  >Enviar</Button>
                <br></br>
                <br></br>
                 <a href="/" class="a-user">Iniciar Sesion</a>  
            </Form>  
        </section>
        </Container>
  );
};

export default Register;