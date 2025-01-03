import React from 'react';
import { useAchievements } from '../../context/AchievementContext';  // Alterando para usar AchievementContext
import AchievementIcon from './AchievementIcon';
import './SectionAchievements.css';

const SectionAchievements = () => {
    const { achievements } = useAchievements();  // Pegando achievements de AchievementContext

    if (!achievements || achievements.length === 0) {
        return <div>No achievements available</div>;  // Caso não haja conquistas
    }

    return (
        <div className="sectionAchievements">
            {achievements.map((achievement) => (
                <AchievementIcon key={achievement.id} achievement={achievement} />
            ))}
        </div>
    );
};

export default SectionAchievements;
