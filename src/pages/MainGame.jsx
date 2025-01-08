import React from 'react';
import { MeowProvider } from '../context/MeowContext';
import { ButtonProvider } from '../context/ButtonContext';
import { AchievementProvider } from '../context/AchievementContext';

import SectionGame from '../components/SectionGame'; 
import ClickerSection from '../components/ClickerSection';
import MenuGame from '../components/MenuGame';
import SectionAchievements from '../components/SectionAchievements';
import ShopSection from '../components/ShopSection';

function MainGame() {
    return (
        <MeowProvider>
            <ButtonProvider>
                <AchievementProvider>
                    <div className="bodyGame">
                        {/* Renderizando as seções do jogo */}
                        <SectionGame name="clicker" color="#FFBCBC">
                            <ClickerSection />
                        </SectionGame>
                        <SectionGame name="menuClicker" color="#E3EA94">
                            <MenuGame />
                            <SectionAchievements />
                        </SectionGame>
                        <SectionGame name="shopClicker" color="#6882B3">
                            <ShopSection />
                        </SectionGame>
                    </div>
                </AchievementProvider>
            </ButtonProvider>
        </MeowProvider>
    );
}

export default MainGame;
