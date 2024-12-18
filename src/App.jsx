import { useReducer, useRef, useCallback, useMemo, useEffect } from 'react';
import { rootReducer } from './reducers/rootReducer'; 
import { v4 as uuidv4 } from 'uuid';

import gameData from './mocks/gameData.json';
import gameAchievements from './mocks/achievements.json';

import SectionGame  from './components/SectionGame';
import ShopSection from './components/ShopSection';
import ClickerSection from './components/ClickerSection';
import SectionAchievements from './components/SectionAchievements';
import MenuGame from './components/MenuGame';

import './App.css';
import './assets/styles/cat-animation.css';
import catImage from '/images/cat-images/cat.png';
import kittenAudio from '/audio/kitten.mp3';

const loadGameState = () => {
    const savedMeowCount = localStorage.getItem('meowCount');
    const savedButtonsGame = localStorage.getItem('buttonsGame');

    return {
        meowCount: savedMeowCount ? parseInt(savedMeowCount, 10) : 0,
        buttonsGame: savedButtonsGame
            ? JSON.parse(savedButtonsGame)
            : gameData.map((button) => ({
                  ...button,
                  id: uuidv4(),
              })),
    };
};

function App() {
    const initialState = loadGameState();

    const [state, dispatch] = useReducer(rootReducer, initialState);
    const audioRef = useRef(null);

    // useEffect para persistência
    useEffect(() => {
        dispatch({
            type: 'SAVE_STATE',
            payload: {
                meowCount: state.meowCount,
                buttonsGame: state.buttonsGame,
            },
        });
    }, [state.meowCount, state.buttonsGame]);

    const handleButtonClick = useCallback(
        (id) => {
            const button = state.buttonsGame.find((button) => button.id === id);
            if (button && state.meowCount >= button.priceOfCats) {
                dispatch({ type: 'DECREMENT_BY_AMOUNT', payload: button.priceOfCats });
                dispatch({ type: 'INCREMENT_CATS', id });
            }
        },
        [state.buttonsGame, state.meowCount]
    );

    const onChangeMeow = useCallback(() => {
        dispatch({ type: 'INCREMENT_MEOW' });
        if (audioRef.current) audioRef.current.play();
    }, []);

    const calculateMeowsPerSecond = useCallback(() => {
        return state.buttonsGame.reduce((total, button) => {
            return total + button.numberOfCats * button.meowsPerSecond;
        }, 0);
    }, [state.buttonsGame]);

    return (
        <div className="bodyGame">
            {/* Renderização das seções do jogo */}
            <SectionGame name="clicker" color="#FFBCBC">
                <ClickerSection
                    meowCount={state.meowCount}
                    calculateMeowsPerSecond={calculateMeowsPerSecond}
                    onChangeMeow={onChangeMeow}
                    catImage={catImage}
                    kittenAudio={kittenAudio}
                />
            </SectionGame>
            <SectionGame name="menuClicker" color="#E3EA94">
                <MenuGame />
                <SectionAchievements achievements={gameAchievements} />
            </SectionGame>
            <SectionGame name="shopClicker" color="#6882B3">
                <ShopSection
                    buttonsGame={state.buttonsGame}
                    handleButtonClick={handleButtonClick}
                />
            </SectionGame>
        </div>
    );
}

export default App;
