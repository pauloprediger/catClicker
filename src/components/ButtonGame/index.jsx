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
        if (buttonState.operation === 'increment') {
            if (meowState.meowCount < price) {
                return;
            }

            const updatedPrice = Math.ceil(price * 1.15);
            meowDispatch({ type: 'UPDATE_MEOWS', payload: -price });
            buttonDispatch({
                type: 'UPDATE_BUTTON',
                payload: { id, number: number + 1, price: updatedPrice },
            });

            meowDispatch({ type: 'INCREMENT_MEOWS_PER_SECOND', payload: incrementPerSecond });

        } else if (buttonState.operation === 'decrement') {
            if (number === 0) return;

            const updatedPrice = Math.ceil(price * 0.85);
            meowDispatch({ type: 'UPDATE_MEOWS', payload: price });
            buttonDispatch({
                type: 'UPDATE_BUTTON',
                payload: { id, number: number - 1, price: updatedPrice },
            });

            meowDispatch({ type: 'DECREMENT_MEOWS_PER_SECOND', payload: incrementPerSecond });
        }
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
