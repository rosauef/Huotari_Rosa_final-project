import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    async function handleSearch() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchTerm);
            const data = await response.json();
            setMeals(data.meals);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const [searchTerm, setSearchTerm] = useState('');
    const [meals, setMeals] = useState([]);
    
   
    return (
    <div className="container">
        <h1>Search for Recipes</h1>
        <input placeholder="Search for recipes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
       <button onClick={handleSearch}>Search</button>
       <div className="row">
       {meals.map((meal) => (
       <div className="col-md-4 mb-4" key={meal.idMeal}>
        <div className="card"> 
        <img className="card-img-top" src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="card-body">
        <h3 className="card-title">{meal.strMeal}</h3>
        <button className = "btn btn-primary" onClick={() => navigate("/recipe/"+meal.idMeal)}>View Recipe</button>
        </div>
        </div>
        </div>
       ))}
       
        </div>
    </div>
    )
}
export default Search;