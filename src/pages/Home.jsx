import {useState, useEffect} from 'react';

function Home() {
    const [randomRecipes, setRandomRecipes] = useState([]);
    useEffect(() => {
        async function fetchRandomRecipes() {
            const recipes = [];
            for (let i = 0; i < 3; i++) {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                const data = await response.json();
                recipes.push(data.meals[0]);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        setRandomRecipes(recipes);
        }
        fetchRandomRecipes();
    }, []);
    return (
        <div>
            <h1>Welcome to the RecipeFinder</h1>
            <p>Discover delicious recipes and save your favorites!</p>
            <h2>Explore random recipes</h2>
            {randomRecipes.map((recipe) => (
                <div key={recipe.idMeal}>
                    <h3>{recipe.strMeal}</h3>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
            ))}
        </div>
    )
}

export default Home;