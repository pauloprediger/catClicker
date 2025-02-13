import React from 'react';

import SectionGame from '../components/SectionGame';
import ClickerSection from '../components/ClickerSection';
import MenuGame from '../components/MenuGame';
import SectionAchievements from '../components/SectionAchievements';
import ShopSection from '../components/ShopSection';
import BuyAndSellSection from '../components/BuyAndSellSection';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MainGame() {
    return (
        <div className="bodyGame">
            {/* Renderizando as seções do jogo */}
            <Container> 
                <Row>
                    <Col xs={12} md={4} className="d-flex">
                        <Card className="mb-4 w-100" style={{ backgroundColor: '#FFBCBC' }}>
                            <Card.Body>
                                <ClickerSection />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="d-flex">
                        <Card className="mb-4 w-100" style={{ backgroundColor: '#E3EA94' }}>
                            <Card.Body>
                                <MenuGame />
                                <SectionAchievements />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className="d-flex">
                        <Card className="mb-4 w-100" style={{ backgroundColor: '#6882B3' }}>
                            <Card.Body>
                                <BuyAndSellSection />
                                <ShopSection />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainGame;
