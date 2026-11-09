import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        localStorage.getItem('favorites') && setFavorites(JSON.parse(localStorage.getItem('favorites')));
    }, []);
    const navigate = useNavigate();

    return (
    <div className="container">
        <h1>Favorites</h1>
        <div className="row">
        {favorites.map((favorite) => (
        <div key={favorite.idMeal} className="col-md-4 mb-4">
            <div className="card">
            <img className="card-img-top" src={favorite.strMealThumb} alt={favorite.strMeal} />
            <div className="card-body">
            <h3 className="card-title">{favorite.strMeal}</h3>
            <button className = "btn btn-primary" onClick={() => navigate('/recipe/'+favorite.idMeal)}>View Recipe</button>
        </div>
        </div>
        </div>
        ))}
    </div>
    </div>
    )   
}
export default Favorites;