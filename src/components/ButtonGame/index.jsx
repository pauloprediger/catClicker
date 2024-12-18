import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGame.css';
import { PiCatThin } from 'react-icons/pi';
import Button from 'react-bootstrap/Button';

const ButtonGame = ({ name, color, number, price, onClick, className }) => {
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
                onClick={onClick}
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
    number: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonGame;
