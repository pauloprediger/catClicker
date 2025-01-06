import React from 'react';
import './MeowCounter.css';
import { useMeowState } from '../../context/MeowContext'; // Obtém os valores do contexto

const MeowCounter = () => {
    const { meowCount, meowsPerSecond } = useMeowState(); // Obtém os valores do contexto

    return (
        <div className="meow-counter">
            <h1 className="meow-title">
                Meow's
                <br />
                {meowCount.toFixed(2) >= 0 ? meowCount.toFixed(2) : 0}
            </h1>
            <p className="meow-per-second">
                Per sec: {meowsPerSecond.toFixed(2) >= 0 ? meowsPerSecond.toFixed(2) : '0.00'}
            </p>
        </div>
    );
};

export default MeowCounter;
