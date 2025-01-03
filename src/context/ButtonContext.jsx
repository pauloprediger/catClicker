import { createContext, useReducer, useContext, useEffect } from 'react';
import gameData from '../mocks/gameData.json';
import { v4 as uuidv4 } from 'uuid';

// Contexto para os botões do jogo
export const ButtonContext = createContext();

const buttonReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BUTTON':
            // Atualizar o botão (exemplo)
            return {
                buttonsGame: state.buttonsGame.map((button) =>
                    button.id === action.payload.id ? { ...button, ...action.payload } : button
                ),
            };
        default:
            return state;
    }
};

export const ButtonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(buttonReducer, {
        buttonsGame: gameData.map((button) => ({
            ...button,
            id: uuidv4(),
        })),
    });

    useEffect(() => {
        localStorage.setItem('buttonsGame', JSON.stringify(state.buttonsGame));
    }, [state.buttonsGame]);

    return <ButtonContext.Provider value={{ state, dispatch }}>{children}</ButtonContext.Provider>;
};

export const useButtonState = () => useContext(ButtonContext).state;
export const useButtonDispatch = () => useContext(ButtonContext).dispatch;
