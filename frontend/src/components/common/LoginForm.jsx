import React from "react";
import { Urlogin } from "../../services/apiCall";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";



class Login extends React.Component {


    state = {
      form: {
        username: "",
        password: "",
      },
      error: false,
      errorMsg: "",
    };
  
    handleInputChange = async (event) => {
      await this.setState({
        form: {
          ...this.state.form,
          [event.target.name]: event.target.value,
        },
      });
    };
    

    handleSubmit = (event) => {
      event.preventDefault();
      let url = Urlogin;
      const user = {
        username: this.state.form.username,
        password: this.state.form.password,
      };
      axios.post(url, user).then((response) => {
        if (response.data.data === "logged") {
          console.log(response);
          this.props.history.push('/home');
        } else {
          this.setState({
            error: true,
            errorMsg: response.data.message,
          });
        }
      });
    };

    
    render() {
      return (
        <React.Fragment>
          <Container className='flex-grow-1 my-2'>
            <h3 className='display-4 tituloQuienesSomos fw-bold text-center mb-3 pb-3 my-2'> Iniciar Sesion </h3>
            <Form className="mb-5" onSubmit={this.handleSubmit}>
              <Form.Group class="mb-3">
                <Form.Label for="username" class="form-label">Nombre de usuario</Form.Label>
                <Form.Control type="text"  id="inputName" name="username" onChange={this.handleInputChange}></Form.Control>
              </Form.Group>
              <Form.Group class="mb-3">
                <Form.Label for="password" class="form-label">Contraseña</Form.Label>
                <Form.Control type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={this.handleInputChange}></Form.Control>
              </Form.Group>
              <div className="pb-3">
                <a href="/" class="a-user">¿Olvidaste tu contraseña?</a><span> /</span>
                <a href="/register" class="a-user">Registrarse</a>
              </div>
              <Button type="submit" variant="info" className="text-white" size="lg">Enviar</Button>
            </Form>
          </Container> 
         </React.Fragment>  
        );
    }
    }

export default Login;