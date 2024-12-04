import React from 'react';
import MeowCounter from '../MeowCounter';
import ClickableCat from '../ClickableCat';
import './ClickerSection.css';

export const ClickerSection = ({
    meowCount,
    calculateMeowsPerSecond,
    onChangeMeow,
    catImage,
    kittenAudio,
}) => {
    return (
        <div className="container-clicker">
            <MeowCounter meowCount={meowCount} meowsPerSecond={calculateMeowsPerSecond()} />
            <ClickableCat onClick={onChangeMeow} imageSrc={catImage} audioSrc={kittenAudio} />
        </div>
    );
};
export default ClickerSection;
