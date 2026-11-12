import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [randomRecipes, setRandomRecipes] = useState([]);
    useEffect(() => {
        async function fetchRandomRecipes() {
            const recipes = [];
            for (let i = 0; i < 9; i++) {
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
        <div className="container">
            <h1 className="mt-4 mb-4">Welcome</h1>
            <p>Discover delicious recipes and save your favorites!</p>
            <h2 className="mb-4">Explore random recipes:</h2>
            <div className="row">
            {randomRecipes.map((recipe) => (
                <div className="col-md-4 mb-4" key={recipe.idMeal}>
                <div className="card" >
                    <img className="card-img-top" src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <div className="card-body">
                    <h3 className="card-title">{recipe.strMeal}</h3>
                    <button className="btn btn-primary" onClick={() => navigate('/recipe/'+recipe.idMeal)} >View Recipe</button>
                    </div>
                </div>
                </div>
                
            ))}
            </div>
        </div>
    )
}

export default Home;