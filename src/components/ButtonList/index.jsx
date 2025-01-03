import React, { useContext } from 'react';
import './ButtonList.css';
import ButtonGame from '../ButtonGame';
import Stack from 'react-bootstrap/Stack';
import { ButtonContext } from '../../context/ButtonContext'; // Importando o ButtonContext


const ButtonList = () => {
    // Acessando o estado de buttonsGame a partir do ButtonContext
    const { state: buttonState } = useContext(ButtonContext);

    return (
        <Stack gap={2} className="col-md-12 mx-auto buttonContainer scrollable-section">
            {buttonState.buttonsGame.map((buttonGame, index) => {
                const canShow = index === 0 || buttonState.buttonsGame[index - 1].numberOfCats > 0;
                return canShow ? (
                    <ButtonGame
                        key={buttonGame.id}
                        name={buttonGame.name}
                        color={buttonGame.color}
                        number={buttonGame.numberOfCats}
                        price={buttonGame.priceOfCats}
                        className="pop-animation"
                    />
                ) : null;
            })}
        </Stack>
    );
};

export default ButtonList;
