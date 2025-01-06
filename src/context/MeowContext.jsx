import { createContext, useReducer, useContext, useEffect } from 'react';

// Contexto para o contador de Meows
export const MeowContext = createContext();

const initialState = {
    meowCount: parseFloat(localStorage.getItem('meowCount')) || 0, // Lê o valor do localStorage ou 0 como fallback
    meowsPerSecond: parseFloat(localStorage.getItem('meowsPerSecond')) || 0, // Alterado para parseFloat
};

export const meowReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_MEOW':
            return {
                ...state,
                meowCount: state.meowCount + (action.payload || 1),
            };
        case 'INCREMENT_MEOWS_PER_SECOND':
            return {
                ...state,
                meowsPerSecond: state.meowsPerSecond + (action.payload || 0),
            };
        default:
            return state;
    }
};

export const MeowProvider = ({ children }) => {
    const [state, dispatch] = useReducer(meowReducer, initialState);

    // Atualiza o localStorage sempre que o estado mudar
    useEffect(() => {
        localStorage.setItem('meowCount', state.meowCount.toFixed(2));
        localStorage.setItem('meowsPerSecond', state.meowsPerSecond.toFixed(2));
    }, [state.meowCount, state.meowsPerSecond]); // A cada alteração no estado, atualiza o localStorage

    // Atualiza os Meows a cada segundo se meowsPerSecond for maior que 0
    useEffect(() => {
        const interval = setInterval(() => {
            if (state.meowsPerSecond > 0) {
                dispatch({ type: 'INCREMENT_MEOW', payload: state.meowsPerSecond });
            }
        }, 1000);

        return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }, [state.meowsPerSecond]); // Certifique-se de que o intervalo seja atualizado conforme necessário

    return <MeowContext.Provider value={{ state, dispatch }}>{children}</MeowContext.Provider>;
};

export const useMeowState = () => useContext(MeowContext).state;
export const useMeowDispatch = () => useContext(MeowContext).dispatch;
