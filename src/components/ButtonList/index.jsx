import React, { useContext } from 'react';
import './ButtonList.css';
import ButtonGame from '../ButtonGame';
import Stack from 'react-bootstrap/Stack';
import { ButtonContext } from '../../context/ButtonContext';

const ButtonList = () => {
    const { state: buttonState } = useContext(ButtonContext);

    return (
        <Stack gap={2} className="col-md-12 mx-auto buttonContainer scrollable-section">
            {buttonState.buttonsGame.map((buttonGame, index) => {
                // Verifica se o botão atual pode ser exibido
                const canShow =
                    index === 0 || buttonState.buttonsGame[index - 1].number > 0;

                return canShow ? (
                    <ButtonGame
                        key={buttonGame.id}
                        id={buttonGame.id}
                        className="pop-animation"
                    />
                ) : null;
            })}
        </Stack>
    );
};

export default ButtonList;
