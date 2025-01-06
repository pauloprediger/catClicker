import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ButtonContext } from '../../context/ButtonContext';
import { MeowContext } from '../../context/MeowContext';
import Button from 'react-bootstrap/Button';
import './ButtonGame.css';
import { PiCatThin } from 'react-icons/pi';

const ButtonGame = ({ id, className }) => {
    const { state: buttonState, dispatch: buttonDispatch } = useContext(ButtonContext);
    const { state: meowState, dispatch: meowDispatch } = useContext(MeowContext);

    const button = buttonState.buttonsGame.find((btn) => btn.id === id);
    if (!button) return null;

    const { name, color, number, price, incrementPerSecond } = button;

    const handleClick = () => {
        console.log('Incrementando meowsPerSecond:', incrementPerSecond); // Log para depuração
        if (meowState.meowCount < price) {
            return;
        }

        // Atualiza o preço com base em um fator de crescimento
        const updatedPrice = Math.ceil(price * 1.15);

        // Atualiza o número de Meows (diminuindo o valor do botão)
        meowDispatch({ type: 'INCREMENT_MEOW', payload: -price });

        // Atualiza o número de botões comprados e o preço do botão
        buttonDispatch({
            type: 'UPDATE_BUTTON',
            payload: { id, number: number + 1, price: updatedPrice },
        });

        // Atualiza a quantidade de Meows por segundo, se aplicável
        meowDispatch({ type: 'INCREMENT_MEOWS_PER_SECOND', payload: incrementPerSecond });
    };

    return (
        <div className="d-grid gap-2">
            <Button
                variant="primary"
                size="lg"
                style={{ backgroundColor: color }}
                className={`buttonGame ${className}`}
                onClick={handleClick}
            >
                <div className="button-content">
                    <div className="info">
                        <h2 className="cat-name">{name}</h2>
                        <p className="cat-icon">
                            <PiCatThin className="icon" />: {price} Meows
                        </p>
                    </div>
                    <div className="number-container">
                        <h1 className="numberOfCats">{number}</h1>
                    </div>
                </div>
            </Button>
        </div>
    );
};

ButtonGame.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ButtonGame;
