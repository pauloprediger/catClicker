import React from 'react';

import { MeowProvider } from './context/MeowContext';
import { ButtonProvider } from './context/ButtonContext';
import { AchievementProvider } from './context/AchievementContext';

import AppRouter from './pages/router';  // Roteamento da aplicação

import './App.css';

const App = () => {
    return (
        <MeowProvider>
            <ButtonProvider>
                <AchievementProvider>
                    <AppRouter /> 
                </AchievementProvider>
            </ButtonProvider>
        </MeowProvider>
    );
};

export default App;
