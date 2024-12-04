import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import './ClickableCat.css';
import '../../assets/styles/cat-animation.css';

const ClickableCat = ({ onClick, imageSrc, audioSrc }) => {
    const audioRef = useRef(null);

    const handleCatClick = useCallback(() => {
        onClick();

        if (audioRef.current) {
            audioRef.current.play();
        }

        const catElement = document.querySelector('.clickable-cat');
        if (catElement) {
            catElement.classList.add('pulsing');
            setTimeout(() => {
                catElement.classList.remove('pulsing');
            }, 800);
        }
    }, [onClick]);

    return (
        <div className="clickable-cat-counter">
            <img className="clickable-cat" src={imageSrc} alt="Cat" onClick={handleCatClick} />
            <audio ref={audioRef} src={audioSrc}/>
        </div>
    );
};

ClickableCat.propTypes = {
    onClick: PropTypes.func.isRequired, 
    imageSrc: PropTypes.string.isRequired, 
    audioSrc: PropTypes.string.isRequired, 
};

export default ClickableCat;
