import { createContext, useReducer, useContext, useEffect } from 'react';

// Contexto para o contador de Meows
export const MeowContext = createContext();

const initialState = {
    meowCount: parseInt(localStorage.getItem('meowCount')) || 0, // Lê o valor do localStorage ou 0
    meowsPerSecond: parseInt(localStorage.getItem('meowsPerSecond')) || 0, // Inicializado com 0 ou valor salvo
};

export const meowReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_MEOW':
            return {
                ...state,
                meowCount: state.meowCount + (action.payload || 1), // Incrementa o contador de meows
            };
        case 'INCREMENT_MEOWS_PER_SECOND':
            return {
                ...state,
                meowsPerSecond: state.meowsPerSecond + 1, // Incrementa meows por segundo
            };
        default:
            return state;
    }
};

export const MeowProvider = ({ children }) => {
    const [state, dispatch] = useReducer(meowReducer, initialState);

    // Salva os valores no localStorage sempre que mudarem
    useEffect(() => {
        localStorage.setItem('meowCount', state.meowCount);
        localStorage.setItem('meowsPerSecond', state.meowsPerSecond);
    }, [state.meowCount, state.meowsPerSecond]);

    // Incrementa o contador de meows com base nos meows por segundo
    useEffect(() => {
        const interval = setInterval(() => {
            if (state.meowsPerSecond > 0) {
                dispatch({ type: 'INCREMENT_MEOW', payload: state.meowsPerSecond });
            }
        }, 1000); // Atualiza a cada segundo

        return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
    }, [state.meowsPerSecond]);

    return <MeowContext.Provider value={{ state, dispatch }}>{children}</MeowContext.Provider>;
};

export const useMeowState = () => useContext(MeowContext).state;
export const useMeowDispatch = () => useContext(MeowContext).dispatch;
