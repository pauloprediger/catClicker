import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import MainGame from './MainGame'; // Tela principal do jogo
import NotFound from './NotFound'; // Página de erro 404

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Router>
                    <Routes>
                        {/* Rota principal do jogo */}
                        <Route path="/" element={<MainGame />} />

                        {/* Rota para páginas não encontradas */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;
