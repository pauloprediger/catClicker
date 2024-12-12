import React from 'react';
import AchievementIcon from './AchievementIcon';
import './SectionAchievements.css';

const SectionAchievements = ({ achievements }) => {
    return (
        <div className="sectionAchievements">
            {achievements.map((achievement) => (
                <AchievementIcon key={achievement.id} achievement={achievement} />
            ))}
        </div>
    );
};

export default SectionAchievements;
