import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainGame from './MainGame'; // Tela principal do jogo
import NotFound from './NotFound'; // Página de erro 404

function AppRouter() {
    return (
        <BrowserRouter basename="/catClicker/">
            <Routes>
                {/* Página inicial */}
                <Route path="/" element={<MainGame />} />

                {/* Página 404 */}
                <Route path="/404" element={<NotFound />} />

                {/* Qualquer outra rota irá redirecionar para a página 404 */}
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
