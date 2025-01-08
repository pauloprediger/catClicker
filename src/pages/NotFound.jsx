import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="not-found">
            <h1>404 - Página não encontrada</h1>
            <Link to="/">Voltar para o jogo</Link>
        </div>
    );
}

export default NotFound;
