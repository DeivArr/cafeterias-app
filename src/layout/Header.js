import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <div>   
            <Navbar bg = "light" expand = "lg" >
                <Navbar.Brand href = "/home">Cafeterias Admin</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className = "mr-auto" >
                        <Nav.Link href = "/home"> Home </Nav.Link>
                        <Nav.Link href = "/update"> Update </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;