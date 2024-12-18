import { meowReducer } from './meowReducer';
import { buttonsReducer } from './buttonsReducer';
import { persistReducer } from './persistReducer';

export const rootReducer = (state, action) => ({
    meowCount: meowReducer(state.meowCount, action),
    buttonsGame: buttonsReducer(state.buttonsGame, action),
    persist: persistReducer(state, action),
});
