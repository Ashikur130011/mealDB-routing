import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Meal = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.meal;
    return (
        <div>
            <Col className="mt-4">
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>{strInstructions.slice(0, 200)}.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;