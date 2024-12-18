export const persistReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_STATE':
            localStorage.setItem('meowCount', action.payload.meowCount);
            localStorage.setItem('buttonsGame', JSON.stringify(action.payload.buttonsGame));
            return state;
        default:
            return state;
    }
};
