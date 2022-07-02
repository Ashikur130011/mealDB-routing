import React, { useEffect, useState } from 'react';
import Meal from './Meal/Meal';
import Row from "react-bootstrap/Row";
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect( () => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        )
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    },[searchText])
    const handleSearchText= e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }
    return (
        <div className='container'>
            <h1 className="text-danger my-3 fw-bold">Meal-DB</h1>
            <input
                className="w-50 border border-danger rounded-3"
                type="search"
                onChange={handleSearchText}
                placeholder="search by name..."
                name=""
                id=""
            />
            <Row xs={1} md={3} className="g-4">
                        {meals.map((meal) => (
                            <Meal meal={meal} key={meal.idMeal}></Meal>
                        ))}
            </Row>
            
        </div>
    );
};

export default Meals;