import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import { useParams, Link } from "react-router-dom";
import './Details.css'

const Details = () => {
    const { mealId } = useParams();
    const [details, setDetails] = useState([])
    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    },[])
    
    return (
        <div className="detail-card">
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{details.strMeal}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        style={{ width: "25rem" }}
                        src={details.strMealThumb}
                        alt=""
                    />
                    <p>{details.strInstructions}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link className="align-middle" to="/meals">
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
            {/* <Card style={{ width: "30rem"}}>
                <Card.Img variant="top" src={details.strMealThumb} />
                <Card.Body>
                    <Card.Title>{details.strMeal}</Card.Title>
                    <Card.Text>{details.strInstructions}</Card.Text>
                    <Link to="/meals">
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card> */}
        </div>
    );
};

export default Details;