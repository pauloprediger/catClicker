import React from 'react';
import './SectionGame.css';
import PropTypes from 'prop-types';
import useLightenColor from '../../hooks/useLightenColor';

export const SectionGame = ({ name, color, children }) => {
	// Calcula a cor mais clara (20% mais clara neste caso)
	const lightenColor = useLightenColor();
    const lighterColor = lightenColor(color, 0.2);

	const sectionStyle = {
		background: (name === 'clicker' || name === 'menuClicker')
			? `repeating-linear-gradient(45deg, ${color}, ${color} 10px, ${lighterColor} 10px, ${lighterColor} 20px)`
			: color, // Para as outras seções, aplica apenas a cor de fundo
	};

	return (
		<section className="sectionGame" style={sectionStyle}>
			{children}
		</section>
	);
};

SectionGame.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	children: PropTypes.node,
};