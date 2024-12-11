import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SectionConquistas.css';

const SectionAchievements = ({ achievements }) => {
    return (
        <div className='bodyAchievements'>
            <Row xs={1} md={3} className="g-4">
                {achievements.map((achievement) => (
                    <Col key={achievement.id}>
                        <Card className = 'animationCard' style={{ backgroundColor: achievement.backgroundColor, cursor: 'pointer'}}>
                            <Card.Body className='card-body'>
                                <Card.Title>{achievement.title}</Card.Title>
                                <Card.Text className='card-text'>{achievement.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SectionAchievements;
