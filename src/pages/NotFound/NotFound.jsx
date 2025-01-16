import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

function NotFound() {
    return (
        <div className="not-found">
            <h1>😿 Oops... Gatinho perdido!</h1>
            <p>Parece que o gatinho clicou em algo errado e acabou vindo parar aqui.</p>
            <img 
                src="https://placekitten.com/400/300" 
                alt="Gatinho triste" 
                className="not-found-image"
            />
            <Link to="/" className="not-found-link">
                🏠 Voltar para o jogo!
            </Link>
        </div>
    );
}

export default NotFound;
