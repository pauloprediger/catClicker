import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const MenuGame = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Estátisticas</Nav.Link>
                    <Nav.Link href="#features">Opções</Nav.Link>
                    <Nav.Link href="#pricing">Conquistas</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MenuGame;
