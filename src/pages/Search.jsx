import {useState} from 'react';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
    <div>
        <h1>Search for Recipes</h1>
        <input placeholder="Search for recipes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
       <p>Search Term: {searchTerm}</p>
       <button>Search</button>
    </div>
    )
}
export default Search;