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

    function handleAddToFavorites () {
        const favoriteMeal = {
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb
        }
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.some(favorite => favorite.idMeal === meal.idMeal)) {
           favorites.push(favoriteMeal);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log(favorites);
    }

    return (
    <div className="container mt-4" style={{maxWidth: '900px'}}>
        <h2 className="mb-3">{meal && meal.strMeal}</h2>
        <div className="text-center mb-3">
        <button className=" btn btn-success mb-3" onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
        <img className="img-fluid rounded mb-4" src={meal && meal.strMealThumb} alt={meal && meal.strMeal} />
        <div className="card mb-4">
            <div className="card-body text-start">
                <h2>Ingredients</h2>
        <ul>
            {ingredients.map((ingredient) => {
                return <li key ={ingredient}>{ingredient}</li>;
            })} 
        </ul>
        </div>
        </div>
        <div className="card">
            <div className="card-body text-start">
                <h2>Instructions</h2>
                <p style={{whiteSpace: 'pre-line'}}>{meal && meal.strInstructions}</p>
            </div>
        </div>
    </div>
    )
}

export default RecipeDetails;