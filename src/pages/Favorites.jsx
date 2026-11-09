import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        localStorage.getItem('favorites') && setFavorites(JSON.parse(localStorage.getItem('favorites')));
    }, []);
    const navigate = useNavigate();

    return (
    <div>
        <h1>Favorites</h1>
        {favorites.map((favorite) => (
        <div key={favorite.idMeal}>
            <p>{favorite.strMeal}</p>
            <img src={favorite.strMealThumb} alt={favorite.strMeal} />
            <button onClick={() => navigate('/recipe/'+favorite.idMeal)}>View Recipe</button>
        </div>
        ))}
    </div>
    )   
}
export default Favorites;