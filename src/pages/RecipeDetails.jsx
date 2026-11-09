import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';

function RecipeDetails() {
    const params = useParams();
    const [meal, setMeal] = useState(null);
    useEffect(() => {
        async function fetchMeal() {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+params.id);
                const data = await response.json();
                setMeal(data.meals[0]);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
            fetchMeal();
        }, [params.id]);

    const ingredients = [];
    if (meal != null) {
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal['strIngredient' + i]
        if (ingredient) {
            ingredients.push(ingredient);
            }
        }
    }      

        
    return (
    <div>
        <h1>Recipe Details</h1>
        <h2>{meal && meal.strMeal}</h2>
        <img src={meal && meal.strMealThumb} alt={meal && meal.strMeal} />
        <h2>Ingredients</h2>
        <ul>
            {ingredients.map((ingredient) => {
                return <li key ={ingredient}>{ingredient}</li>;
            })} 
        </ul>
        
        <h2>Instructions</h2>
        <p>{meal && meal.strInstructions}</p>
    </div>
    )
}

export default RecipeDetails;