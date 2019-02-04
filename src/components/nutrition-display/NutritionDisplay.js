import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const NutritionDisplay = ({intake, protein, fat, carbohydrate}) => {
    return (
        <div className="nutrition-display">
            <Container>
                <Row>
                    <Col md={3}>
                        <NutritionCard title="Goal Protein" value={protein}/>
                    </Col>
                    <Col md={3}>
                        <NutritionCard title="Goal Fat" value={fat}/>
                    </Col>
                    <Col md={3}>
                        <NutritionCard title="Goal Carbohydrate" value={carbohydrate}/>
                    </Col>
                    <Col md={3}>
                        <NutritionCard title="Goal Intake" value={intake}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export const NutritionCard = ({title, value}) => {
    return (  
        <div className="card text-white text-center bg-primary mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <h4 className="card-title">{value}</h4>
            </div>
        </div>
    );
}
