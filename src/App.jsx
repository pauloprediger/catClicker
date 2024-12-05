import { useReducer, useRef, useCallback, useMemo, useEffect, useState } from 'react';
import { SectionGame } from './components/SectionGame';
import { v4 as uuidv4 } from 'uuid';
import gameData from './json/gameData.json'

import ShopSection from './components/ShopSection';
import ClickerSection from './components/ClickerSection';


import './App.css';
import './assets/styles/cat-animation.css';
import catImage from '/images/cat-images/cat.png';
import kittenAudio from '/audio/kitten.mp3';

// Definição inicial dos botões do jogo

const loadGameState = () => {
    const savedMeowCount = localStorage.getItem('meowCount');
    const savedButtonsGame = localStorage.getItem('buttonsGame');
    
    return {
        meowCount: savedMeowCount ? parseInt(savedMeowCount, 10) : 0,
        buttonsGame: savedButtonsGame ? JSON.parse(savedButtonsGame) : gameData.map((button) => ({
            ...button,
            id: uuidv4()
        }))
    }
}

// Reducer para gerenciar o estado dos botões
const buttonsReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_CATS':
            return state.map((button) => {
                if (button.id === action.id) {
                    if (action.meowCount >= button.priceOfCats) {
                        const newPrice = Math.ceil(button.priceOfCats * 1.15);
                        return {
                            ...button,
                            numberOfCats: button.numberOfCats + 1,
                            priceOfCats: newPrice,
                        };
                    }
                }
                return button;
            });
        default:
            return state;
    }
};

function App() {

    const { meowCount: initialMeowCount, buttonsGame: initialButtonsGame } = loadGameState();

    const [buttonsGame, dispatch] = useReducer(buttonsReducer, initialButtonsGame); // Substitua `initialButtonsState` por `initialButtonsGame`
    const [meowCount, setMeowCount] = useState(initialMeowCount);
    const audioRef = useRef(null);

    // Função para calcular o total de Meows por segundo, baseado nos gatos comprados
    const calculateMeowsPerSecond = useCallback(() => {
        return buttonsGame.reduce((total, button) => {
            return total + button.numberOfCats * button.meowsPerSecond;
        }, 0);
    }, [buttonsGame]);

    // useEffect para incrementar os Meows automaticamente com base no tempo
    useEffect(() => {
        const meowsPerSecond = calculateMeowsPerSecond();
        if (meowsPerSecond > 0) {
            const interval = setInterval(() => {
                setMeowCount((prevCount) => prevCount + meowsPerSecond);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [calculateMeowsPerSecond]);

    // Função para incrementar o contador de Meows, memorizada com useCallback
    const onChangeMeow = useCallback(() => {
        setMeowCount((prevCount) => prevCount + 1);
        if (audioRef.current) {
            audioRef.current.play();
        }

        // Lógica de animação para o clique
        const catImage = document.querySelector('.img-cat');
        if (catImage) {
            catImage.classList.add('pulsing');
            setTimeout(() => {
                catImage.classList.remove('pulsing');
            }, 800);
        }
    }, []);

    // Função para lidar com o clique no botão de compra de gatos
    const handleButtonClick = useCallback(
        (id) => {
            const button = buttonsGame.find((button) => button.id === id);
            if (button && meowCount >= button.priceOfCats) {
                setMeowCount((prevCount) => prevCount - button.priceOfCats);
                dispatch({ type: 'INCREMENT_CATS', id, meowCount });
            }
        },
        [buttonsGame, meowCount]
    );
    //
    useEffect(() => {
        console.log('Salvando estado no localStorage');
        localStorage.setItem('meowCount', meowCount);
        localStorage.setItem('buttonsGame', JSON.stringify(buttonsGame));
    }, [meowCount, buttonsGame]);

    // Definindo as seções do jogo
    const definitionsSectionGame = useMemo(
        () => [
            { id: uuidv4(), name: 'clicker', color: '#FFBCBC' },
            { id: uuidv4(), name: 'menuClicker', color: '#E3EA94' },
            { id: uuidv4(), name: 'shopClicker', color: '#6882B3' },
        ],
        []
    );

    return (
        <div className="bodyGame">
            {definitionsSectionGame.map((sectionGame) => (
                <SectionGame
                    key={sectionGame.id}
                    name={sectionGame.name}
                    color={sectionGame.color}
                    className={sectionGame.name === 'shopClicker' ? 'scrollable-section' : ''}
                >
                    {sectionGame.name === 'clicker' && (
                        <ClickerSection
                            meowCount={meowCount}
                            calculateMeowsPerSecond={calculateMeowsPerSecond}
                            onChangeMeow={onChangeMeow}
                            catImage={catImage}
                            kittenAudio={kittenAudio}
                        />
                    )}
                    {sectionGame.name === 'shopClicker' && (
                        <ShopSection
                            buttonsGame={buttonsGame}
                            handleButtonClick={handleButtonClick}
                        />
                    )}
                </SectionGame>
            ))}
        </div>
    );
}
export default App;
