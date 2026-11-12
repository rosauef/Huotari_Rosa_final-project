import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
        <span className= "navbar-brand">RecipeFinder</span>
        <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/search">Search</Link>
        <Link className="nav-link" to="/favorites">Favorites</Link>
        </div>
        </div>
        </nav>
        
    )
}

    export default Navbar
