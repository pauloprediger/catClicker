import React from 'react';
import './MeowCounter.css';
import { useMeowState } from '../../context/MeowContext'; // Importa o hook para acessar o estado global

const MeowCounter = () => {
    const { meowCount, meowsPerSecond } = useMeowState(); // Obtém os valores do contexto

    return (
        <div className="meow-counter">
            <h1 className="meow-title">
                Meow's
                <br />
                {meowCount >= 0 ? meowCount : 0}
            </h1>
            <p className="meow-per-second">
                Per sec: {meowsPerSecond >= 0 ? meowsPerSecond.toFixed(2) : '0.00'}
            </p>
        </div>
    );
};

export default MeowCounter;
