import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './ButtonGame.css';
import { PiCatThin } from 'react-icons/pi';
import Button from 'react-bootstrap/Button';
import { ButtonContext } from '../../context/ButtonContext';  // Importando o contexto dos botões
import { MeowContext } from '../../context/MeowContext';  // Importando o contexto dos Meows

const ButtonGame = ({ name, color, className }) => {
    const { state: buttonState, dispatch: buttonDispatch } = useContext(ButtonContext); // Acessando o estado e dispatch do ButtonContext
    const { state: meowState, dispatch: meowDispatch } = useContext(MeowContext);  // Acessando o estado e dispatch do MeowContext

    const button = buttonState.buttonsGame.find((btn) => btn.name === name);

    if (!button) return null; 
    const { id, number, price } = button;

    
    const handleClick = () => {
        // Atualiza o número de compras do botão
        buttonDispatch({ type: 'UPDATE_BUTTON', payload: { id, number: number + 1, price } });

        // Incrementa a contagem de Meows
        meowDispatch({ type: 'INCREMENT_MEOW' });
    };

    const buttonStyle = {
        backgroundColor: color,
    };

    return (
        <div className="d-grid gap-2">
            <Button
                variant="primary"
                size="lg"
                style={buttonStyle}
                className={`buttonGame ${className}`}
                onClick={handleClick} // Chamando a função handleClick
            >
                <div className="button-content">
                    <div className="info">
                        <h2 className="cat-name">{name}</h2>
                        <p className="cat-icon">
                            <PiCatThin className="icon" />: {price}
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
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ButtonGame;
