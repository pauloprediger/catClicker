import { createContext, useReducer, useContext, useEffect } from 'react';
import gameData from '../mocks/gameData.json'; // Importa os dados do jogo
import { v4 as uuidv4 } from 'uuid';

// Contexto para os botões do jogo
export const ButtonContext = createContext();

// Função para carregar o estado inicial
const loadInitialState = () => {
    const savedData = localStorage.getItem('buttonsGame');
    const savedOperation = localStorage.getItem('operation');
    
    // Carrega os dados dos botões ou usa os dados padrão
    const initialButtons = savedData ? JSON.parse(savedData) : gameData.map((button) => ({
        ...button,
        id: button.id || uuidv4(), // Gera um ID único se não houver
        number: 0, // Começa com 0 de quantidade
    }));
    
    // Se não houver operação salva, define como 'increment' (compra) como padrão
    const initialOperation = savedOperation ? savedOperation : 'increment';

    return { buttonsGame: initialButtons, operation: initialOperation };
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
        case 'SET_OPERATION':
            return {
                ...state,
                operation: action.payload, // Atualiza a operação (increment ou decrement)
            };
        default:
            return state;
    }
};

// Provedor do contexto para os botões
export const ButtonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(buttonReducer, loadInitialState()); // Carrega o estado inicial

    // Salva o estado dos botões e a operação no localStorage sempre que ele mudar
    useEffect(() => {
        localStorage.setItem('buttonsGame', JSON.stringify(state.buttonsGame));
        localStorage.setItem('operation', state.operation); // Salva a operação
    }, [state.buttonsGame, state.operation]);

    return <ButtonContext.Provider value={{ state, dispatch }}>{children}</ButtonContext.Provider>;
};

// Custom hooks para acessar o estado e o dispatch
export const useButtonState = () => useContext(ButtonContext).state;
export const useButtonDispatch = () => useContext(ButtonContext).dispatch;
