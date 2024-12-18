import React from 'react';
import './SectionGame.css';
import PropTypes from 'prop-types';
import useLightenColor from '../../hooks/useLightenColor';

const SectionGame = ({ name, color, children }) => {
    const lightenColor = useLightenColor();
    const lighterColor = lightenColor(color, 0.2);

    const sectionStyle = {
        background:
            name === 'clicker' || name === 'menuClicker' || 'shopClicker'
                ? `repeating-linear-gradient(45deg, ${color}, ${color} 10px, ${lighterColor} 10px, ${lighterColor} 20px)`
                : color, 
        justifyContent:
            name === 'clicker' ? 'center' : '' 
    };

    return (
        <section className="sectionGame" style={sectionStyle}>
            {children}
        </section>
    );
};

export default SectionGame;

SectionGame.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.node,
};
