import React from 'react';
import './ButtonList.css';
import ButtonGame from '../ButtonGame';
import Stack from 'react-bootstrap/Stack';

const ButtonList = ({buttonsGame, handleButtonClick}) => {
    return (
        <Stack gap={2} className="col-md-12 mx-auto buttonContainer scrollable-section ">
            {buttonsGame.map((buttonGame, index) => {
                const canShow = index === 0 || buttonsGame[index - 1].numberOfCats > 0;
                return canShow ? (
                    <ButtonGame
                        key={buttonGame.id}
                        name={buttonGame.name}
                        color={buttonGame.color}
                        number={buttonGame.numberOfCats}
                        price={buttonGame.priceOfCats}
                        onClick={() => handleButtonClick(buttonGame.id)}
                        className="pop-animation" 
                    />
                ) : null;
            })}
        </Stack>
    );
};
export default ButtonList;
