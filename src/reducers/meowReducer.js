export const meowReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_MEOW':
            return state + 1;
        case 'INCREMENT_BY_AMOUNT':
            return state + action.payload;
        case 'DECREMENT_BY_AMOUNT':
            return state - action.payload;
        default:
            return state;
    }
};
