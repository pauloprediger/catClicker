import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './MenuGame.css';

const MenuGame = () => {
    return (
        <Navbar className='bg_personal' data-bs-theme="dark">
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
