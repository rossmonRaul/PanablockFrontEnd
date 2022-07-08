import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Col, Container, Row } from "reactstrap";
import { AutenticarUsuario } from '../../servicios/ServicioAutenticacion';
import logo from '../../images/logo.webp';
//import '../../styles/login.css';


const Login = ({ ValidarSesionActiva }) => {

    const [mensaje, setMensaje] = useState('');

    const onClickIniciarSesion = async(event) => {
        event.preventDefault();
        if(document.querySelector("#txt-usuario").value == "" || document.querySelector("#txt-contrasenha").value == ""){
            setMensaje("Usuario o contraseña invalidos!");
        }else{
            setMensaje("");
            const data = {
                usuario: document.querySelector("#txt-usuario").value,
                contrasena: document.querySelector("#txt-contrasenha").value
            }
            const {token, expiration, usuario} = await AutenticarUsuario(data);
            if(token != null){
                sessionStorage.setItem("token_key", token);
                sessionStorage.setItem("token_expiration", expiration);
                sessionStorage.setItem("data_usuario", usuario);
                ValidarSesionActiva();
            }else{
                setMensaje("Usuario o contraseña incorrectos");                
            }
        }

    }


    return(
        <>
        <br/><br/>
            <Container>
        <div className="content">

            
                    <div className="layout">   

                        <div className="content-left">
                            <img src={logo} className="logo"/>
                        </div>
                        <div className="content-right">
                         <h2>Iniciar sesión</h2>
                    <Form onSubmit={onClickIniciarSesion}>
                        <Form.Group className="mb-3" controlId="txt-usuario">
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su usuario" />
                            <Form.Text className="text-muted">Nunca comparta los datos de su usuario</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="txt-contrasenha">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                                </Form.Group>
                              
                          <Button  type="submit" className="btn">Ingresar </Button>
                        <div className="text-center">
                        </div>
                        <div className="text-center">{mensaje !== '' ? <span>{mensaje}</span> : ''}</div>
                            </Form>
                            </div>
             </div>   
            </div>
            </Container>
           

             
        </>
    )
}

export default Login;