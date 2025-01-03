import React from 'react';
import { useMeowState, useMeowDispatch } from '../../context/MeowContext';
import ButtonList from '../ButtonList';
import './ShopSection.css';

const ShopSection = () => {
    const { meowCount, buttonsGame } = useMeowState();  // Obtendo o meowCount do MeowContext
    const dispatch = useMeowDispatch();

    const handleButtonClick = (id) => {
        const button = buttonsGame.find((btn) => btn.id === id);
        if (button && meowCount >= button.priceOfCats) {
            // Subtrai o preço dos meows
            dispatch({ type: 'INCREMENT_MEOW', payload: -button.priceOfCats });
            // Atualiza o número de gatos
            dispatch({ type: 'INCREMENT_CATS', id });
        }
    };

    return <ButtonList buttonsGame={buttonsGame} handleButtonClick={handleButtonClick} />;
};

export default ShopSection;
