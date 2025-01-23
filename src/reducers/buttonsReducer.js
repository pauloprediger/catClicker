export const buttonsReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CATS':
            return state.map((button) => {
                if (button.id === action.id) {
                    // Verifica se estamos incrementando ou decrementando
                    const factor = action.operation === 'increment' ? 1.15 : 0.85;
                    const newPrice = Math.ceil(button.priceOfCats * factor);
                    const newNumberOfCats = action.operation === 'increment' 
                        ? button.numberOfCats + 1 
                        : (button.numberOfCats > 0 ? button.numberOfCats - 1 : 0); // Evita número negativo

                    return {
                        ...button,
                        numberOfCats: newNumberOfCats,
                        priceOfCats: newPrice,
                    };
                }
                return button;
            });

        default:
            return state;
    }
};
