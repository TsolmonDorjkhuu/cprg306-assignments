"use client";

import { useState, useEffect } from "react";

function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => response.json())
        .then((data) => data.meals || []);
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient || "..."}</h2>
            {meals.length > 0 ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: 50, marginRight: 10 }} />
                            {meal.strMeal}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meals found. Try another ingredient.</p>
            )}
        </div>
    );
}
