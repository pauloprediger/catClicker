import React from 'react';
import './ButtonList.css';
import ButtonGame from '../ButtonGame';

const ButtonList = ({buttonsGame, handleButtonClick}) => {
    return (
        <div className="buttonContainer scrollable-section">
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
        </div>
    );
};
export default ButtonList;
