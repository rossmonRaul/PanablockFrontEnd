import React, { useState, useEffect} from "react";
import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from '../../images/logo.webp';
import user from '../../images/user.png';

//import { IoIosHome, IoIosDocument, IoIosCopy, IoIosPerson, IoMdArchive } from "react-icons/io";
//import { IoEnterOutline } from "react-icons/io5";

const Layout = () => {
    const [linkActive, setLinkActive] = useState(window.location.pathname.replace('/', ''));
    const [nombreUsuario, setnombreUsuario] = useState("");

    const ActivarLink = (to) => {
        setLinkActive(to);
    }

    useEffect(() => {       
        ObtenerNombreUsuario();
    }, []);

    const ObtenerNombreUsuario = () => {
        let usuario = JSON.parse(sessionStorage.getItem("data_usuario"));
        setnombreUsuario(usuario.nombre + " " + usuario.primerApellido);
    }


    return (
        <>
            <div className="wrapper">
                <div className="body-overlay"></div>
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3><img src={logo} className="img-fluid" style={{width: "150px"}} /><span></span></h3>
                    </div>
                    <ul className="list-unstyled components">
                        <li className={linkActive === 'producciondiaria' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/producciondiaria" onClick={() => ActivarLink('producciondiaria')}>{' '}<span>Producción Diaria</span></Link>
                        </li>
                        <div className="small-screen navbar-display">
                            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
                                <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>user</span></Link>
                            </li>
                        </div>
                        <li className={linkActive === 'home' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>Observacion de mantenimiento</span></Link>
                        </li>
                        <li className={linkActive === 'planta' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/planta" onClick={() => ActivarLink('planta')}>{' '}<span>Plantas</span></Link>
                        </li>
                        <li className={linkActive === 'actividadplanta' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/actividadplanta" onClick={() => ActivarLink('actividadplanta')}>{' '}<span>Actividad de plantas</span></Link>
                        </li>
                        <li className={linkActive === 'producto' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/producto" onClick={() => ActivarLink('producto')}>{' '}<span>Productos</span></Link>
                        </li>
                        <li className={linkActive === 'controldecalidad' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/controldecalidad" onClick={() => ActivarLink('controldecalidad')}>{' '}<span>Control de calidad</span></Link>
                        </li>
                        <li className={linkActive === 'tipomaterial' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/tipomaterial" onClick={() => ActivarLink('tipomaterial')}>{' '}<span>Tipos de materiales</span></Link>
                        </li>
                        <li>
                            <Link className={`dashboard`} to="/usuarios" onClick={() => ActivarLink('home')}>{' '}<span>Usuarios</span></Link>
                        </li>
                        <li>
                            <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>Reportes</span></Link>
                        </li>
                    </ul>

                </nav>
                
            
                <div id="content">
                    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#005CB8" }} >
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "#005CB8" }} />
                            <Navbar.Collapse  className="justify-content-end">                                
                                <Nav>                                  
                                    <Nav.Link href="#"><img src={user} style={{objectFit: "contain"} }/> </Nav.Link>
                                    <Nav.Link style={{ fontWeight: "700", color: "white" }} href="#">{nombreUsuario}</Nav.Link>
                                    <Nav.Link href="#" ><Button id="logout"  >Cerrar Sesión</Button></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                    </Navbar>


                    <div className="main-content" style={{height : "100%"} }>
                        <Outlet />
                    </div>
                </div>
            </div>

            <style type="text/css">
                {`
                    #logout {
                        background-color: #dc3545 !important
                    }
                `}
            </style>
        </>
    )
};

export default Layout;
