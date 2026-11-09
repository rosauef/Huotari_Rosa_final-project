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
        
    return (
    <div>
        <h1>Recipe Details</h1>
        <p>Recipe Name: {meal && meal.strMeal}</p>
    </div>
    )
}

export default RecipeDetails;