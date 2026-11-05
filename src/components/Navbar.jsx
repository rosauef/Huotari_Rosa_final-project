import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
        <h1>RecipeFinder</h1>
        <Link to="/">Home | </Link>
        <Link to="/search">Search | </Link>
        <Link to="/favorites">Favorites</Link>
        </div>
        
    )
}

    export default Navbar
