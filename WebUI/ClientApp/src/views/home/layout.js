import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from '../../images/logo.webp';
//import { IoIosHome, IoIosDocument, IoIosCopy, IoIosPerson, IoMdArchive } from "react-icons/io";
//import { IoEnterOutline } from "react-icons/io5";

const Layout = () => {
    const [linkActive, setLinkActive] = useState(window.location.pathname.replace('/',''));
    const ActivarLink = (to) => {
        setLinkActive(to);
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
                        <li className={linkActive === 'home' ? 'active' : ''}>
                            <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>Producción Diaria</span></Link>
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
                        <li>
                            <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>Actividad de plantas</span></Link>
                        </li>
                        <li>
                            <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>Productos</span></Link>
                        </li>
                        <li>
                            <Link className={`dashboard`} to="/" onClick={() => ActivarLink('home')}>{' '}<span>Control de calidad</span></Link>
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
                    <div className="top-navbar">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                               
                                <a className="navbar-brand" href="#"></a>
                                <button className="d-inline-block d-lg-none ml-auto more-button" type="button"
                                    data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="material-icons">more_vert</span>
                                </button>

                                <div className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                                            id="navbarSupportedContent">
                                            <ul className="nav navbar-nav ml-auto">   
                                                <NavDropdown title="Usuario" id="navbarScrollingDropdown">
                                                   <NavDropdown.Item href="#action3">Rol de usuario</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action4">Nombre de usuario</NavDropdown.Item>
                                                    <NavDropdown.Divider />
    <NavDropdown.Item href="#action5">Cerrar sesión</NavDropdown.Item>
                                                </NavDropdown>
                                            </ul>
                                  </div>
                            </div>
                        </nav>
                    </div>

                    <div className="main-content" style={{height : "100%"} }>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Layout;
