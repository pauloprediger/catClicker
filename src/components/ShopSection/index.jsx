import React from 'react';
import ButtonList from '../ButtonList';
import './ShopSection.css';

const ShopSection = ({ buttonsGame, handleButtonClick }) => {
    return <ButtonList buttonsGame={buttonsGame} handleButtonClick={handleButtonClick} />;
};

export default ShopSection;
