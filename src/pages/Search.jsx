import {useState} from 'react';

function Search() {
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
    <div>
        <h1>Search for Recipes</h1>
        <input placeholder="Search for recipes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
       {meals.map((meal) => (
       <div key={meal.idMeal}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <p>{meal.strMeal}</p> 
        </div>
       ))}
       <button onClick={handleSearch}>Search</button>
       
    </div>
    )
}
export default Search;