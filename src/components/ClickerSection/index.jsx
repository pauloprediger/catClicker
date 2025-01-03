import React, { useCallback, useRef } from 'react';
import { useMeowState, useMeowDispatch, MeowProvider } from '../../context/MeowContext'; // Alterado para importar do MeowContext
import MeowCounter from '../MeowCounter';
import ClickableCat from '../ClickableCat';
import './ClickerSection.css';
import catImage from '/images/cat-images/cat.png';
import kittenAudio from '/audio/kitten.mp3';

const ClickerSection = () => {
    const { meowCount, meowsPerSecond } = useMeowState();
    const dispatch = useMeowDispatch();
    const audioRef = useRef(null);


    // Garantir que meowCount e meowsPerSecond são números válidos
    const validMeowCount = isNaN(meowCount) ? 0 : meowCount;
    const validMeowsPerSecond = isNaN(meowsPerSecond) ? 0 : meowsPerSecond;

    return (
        <div className="container-clicker">
                <MeowCounter meowCount={validMeowCount} meowsPerSecond={validMeowsPerSecond} />
                <ClickableCat imageSrc={catImage} audioSrc={kittenAudio} />
            <audio ref={audioRef} src={kittenAudio} />
        </div>
    );
};

export default ClickerSection;
