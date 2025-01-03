import React, { createContext, useContext, useReducer, useEffect } from 'react';
import achievementsData from '../mocks/achievements.json'; // Certifique-se de que o caminho está correto

// Estado inicial
const initialState = {
    achievements: achievementsData || [], // Defina as conquistas no estado inicial
};

// Ação do reducer
const achievementsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACHIEVEMENT':
            return { ...state, achievements: [...state.achievements, action.payload] };
        default:
            return state;
    }
};

// Criando o contexto
const AchievementContext = createContext();

// Hook para acessar o estado de conquistas
export const useAchievements = () => {
    const context = useContext(AchievementContext);
    if (!context) {
        throw new Error('useAchievements must be used within an AchievementProvider');
    }
    return context.state; // Retorna o estado com as conquistas
};

// Provedor para encapsular os componentes que precisam acessar o contexto
export const AchievementProvider = ({ children }) => {
    const [state, dispatch] = useReducer(achievementsReducer, initialState);

    useEffect(() => {
        // Se o JSON for carregado dinamicamente ou precisar de lógica extra
        dispatch({ type: 'ADD_ACHIEVEMENT', payload: achievementsData });
    }, []);

    return (
        <AchievementContext.Provider value={{ state, dispatch }}>
            {children}
        </AchievementContext.Provider>
    );
};
