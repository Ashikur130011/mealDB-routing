import React from 'react';
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Meal = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb} = props.meal;
    return (
        <div>
            <Col className="mt-4">
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>{strInstructions.slice(0, 200)}.</Card.Text>
                    </Card.Body>
                    <Link to={`/details/${idMeal}`}>
                        <Button className='mb-3' variant="outline-danger">Details</Button>{" "}
                    </Link>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;