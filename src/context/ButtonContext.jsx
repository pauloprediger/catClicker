import { createContext, useReducer, useContext, useEffect } from 'react';
import gameData from '../mocks/gameData.json'; // Importa os dados do jogo
import { v4 as uuidv4 } from 'uuid';

// Contexto para os botões do jogo
export const ButtonContext = createContext();

// Função para carregar o estado inicial
const loadInitialState = () => {
    const savedData = localStorage.getItem('buttonsGame');
    if (savedData) {
        return JSON.parse(savedData); // Retorna os dados salvos
    }
    // Se não houver dados salvos, inicializa com os dados do JSON
    return gameData.map((button) => ({
        ...button,
        id: button.id || uuidv4(), // Gera um ID único se não houver
        number: 0, // Começa com 0 de quantidade
    }));
};

// Redutor para atualizar o estado dos botões
const buttonReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BUTTON':
            return {
                buttonsGame: state.buttonsGame.map((button) =>
                    button.id === action.payload.id
                        ? { ...button, ...action.payload } // Atualiza o botão com os novos dados
                        : button
                ),
            };
        default:
            return state;
    }
};

// Provedor do contexto para os botões
export const ButtonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(buttonReducer, {
        buttonsGame: loadInitialState(), // Carrega o estado inicial
    });

    // Salva o estado dos botões no localStorage sempre que ele mudar
    useEffect(() => {
        localStorage.setItem('buttonsGame', JSON.stringify(state.buttonsGame));
    }, [state.buttonsGame]);

    return <ButtonContext.Provider value={{ state, dispatch }}>{children}</ButtonContext.Provider>;
};

// Custom hooks para acessar o estado e o dispatch
export const useButtonState = () => useContext(ButtonContext).state;
export const useButtonDispatch = () => useContext(ButtonContext).dispatch;
