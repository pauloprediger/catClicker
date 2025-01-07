import React from 'react';
import { useMeowState } from '../../context/MeowContext';
import MeowCounter from '../MeowCounter';
import ClickableCat from '../ClickableCat';
import './ClickerSection.css';

const ClickerSection = () => {
    const { meowCount, meowsPerSecond } = useMeowState();

    // Garantir que meowCount e meowsPerSecond são números válidos
    const validMeowCount = isNaN(meowCount) ? 0 : meowCount;
    const validMeowsPerSecond = isNaN(meowsPerSecond) ? 0 : meowsPerSecond;

    return (
        <div className="container-clicker">
            <MeowCounter meowCount={validMeowCount} meowsPerSecond={validMeowsPerSecond} />
            <ClickableCat />
        </div>
    );
};

export default ClickerSection;
