import React, { useCallback } from 'react';
import './ClickableCat.css';
import '../../assets/styles/cat-animation.css';
import { useMeowDispatch, useMeowSound } from '../../context/MeowContext'; // Importa o som do contexto
import resources from '../../config/resources'; 

const ClickableCat = () => {
    const dispatch = useMeowDispatch();
    const playMeowSound = useMeowSound(); // Obtém a função para tocar o som

    const handleCatClick = useCallback(() => {
        dispatch({ type: 'INCREMENT_MEOW' });
        playMeowSound(); // Toca o som ao clicar no gato

        // Adiciona a animação de pulsar no gato
        const catElement = document.querySelector('.clickable-cat');
        if (catElement) {
            catElement.classList.add('pulsing');
            setTimeout(() => {
                catElement.classList.remove('pulsing');
            }, 800);
        }
    }, [dispatch, playMeowSound]);

    return (
        <div className="clickable-cat-counter">
            <img className="clickable-cat" src={resources.images.cat} alt="Cat" onClick={handleCatClick} />
        </div>
    );
};

export default ClickableCat;
