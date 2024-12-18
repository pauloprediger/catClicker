export const buttonsReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_CATS':
            return state.map((button) => {
                if (button.id === action.id) {
                    const newPrice = Math.ceil(button.priceOfCats * 1.15);
                    return {
                        ...button,
                        numberOfCats: button.numberOfCats + 1,
                        priceOfCats: newPrice,
                    };
                }
                return button;
            });
        default:
            return state;
    }
};
