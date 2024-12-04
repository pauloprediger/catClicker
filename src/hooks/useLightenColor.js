import { useCallback } from 'react';

const useLightenColor = () => {
    const lightenColor = useCallback((color, percent) => {
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5, 7), 16);

        // Aumenta a intensidade de cada componente de cor, multiplicando por (1 + percent)
        r = Math.min(255, Math.round(r * (1 + percent)));
        g = Math.min(255, Math.round(g * (1 + percent)));
        b = Math.min(255, Math.round(b * (1 + percent)));

        // Retorna a cor mais clara no formato hexadecimal
        return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }, []);

    return lightenColor;
};

export default useLightenColor;
