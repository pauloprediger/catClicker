import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import './ClickableCat.css';
import '../../assets/styles/cat-animation.css';
import { useMeowDispatch } from '../../context/MeowContext'; // Importa o hook para o contexto

const ClickableCat = ({ imageSrc, audioSrc }) => {
    const dispatch = useMeowDispatch(); // Obtém o dispatch do contexto
    const audioRef = useRef(null);

    const handleCatClick = useCallback(() => {
        dispatch({ type: 'INCREMENT_MEOW' });

        // Reproduz o áudio do gato
        if (audioRef.current) {
            audioRef.current.play();
        }

        // Adiciona a animação de pulsar no gato
        const catElement = document.querySelector('.clickable-cat');
        if (catElement) {
            catElement.classList.add('pulsing');
            setTimeout(() => {
                catElement.classList.remove('pulsing');
            }, 800);
        }
    }, [dispatch]);

    return (
        <div className="clickable-cat-counter">
            <img className="clickable-cat" src={imageSrc} alt="Cat" onClick={handleCatClick} />
            <audio ref={audioRef} src={audioSrc} />
        </div>
    );
};

ClickableCat.propTypes = {
    imageSrc: PropTypes.string.isRequired, // URL da imagem do gato
    audioSrc: PropTypes.string.isRequired, // URL do áudio do miado
};

export default ClickableCat;
