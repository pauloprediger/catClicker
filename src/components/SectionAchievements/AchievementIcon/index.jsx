import React, { useState, useEffect } from 'react';
import './AchievementIcon.css';
import { CiTrophy } from 'react-icons/ci';
import { Card } from 'react-bootstrap';

const AchievementIcon = ({ achievement }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Função para capturar as coordenadas do mouse
    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Adicionando e removendo o evento de mousemove
    useEffect(() => {
        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered]);

    return (
        <div className="achievementContainer">
            <div
                className="bodyAchievement"
                onMouseEnter={(e) => {
                    setIsHovered(true);
                    setMousePosition({ x: e.clientX, y: e.clientY }); // Coordenadas iniciais
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setMousePosition({ x: 0, y: 0 }); // Reseta coordenadas
                }}
                style={{ backgroundColor: achievement.backgroundColor }} // Cor de fundo do ícone
            >
                <CiTrophy size={40} />
            </div>

            {isHovered && (
                <Card
                    className="achievementCard"
                    style={{
                        top: mousePosition.y + 10, // Ajuste para a posição do mouse
                        left: mousePosition.x + 10, // Ajuste para a posição do mouse
                        position: 'absolute', // Garante que o card seja posicionado corretamente
                        zIndex: 999, // Fica acima de outros elementos
                        pointerEvents: 'none', // Não interfere nos eventos do mouse
                    }}
                >
                    <Card.Header>{achievement.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{achievement.title}</Card.Title>
                        <Card.Text>{achievement.description}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default AchievementIcon;
