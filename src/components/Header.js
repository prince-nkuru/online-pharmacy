import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
      <div>
        <header>
            <div className="logo">
                <h1>Online Pharmacy</h1>
            </div>
            <div className='search-header'>
              <input placeholder='search medicine'/>
            </div>
            <nav>
                <ul>
                    
                    <Link to = '/home'>home</Link>
                    <Link to = '/products'>Products</Link>
                    <Link to = '/about'>About Us</Link>
                    <Link to = '/contact'>contact</Link>
                    <Link to = '/log'>sign-in</Link>
                    
                </ul>
            </nav>
        </header>
        </div>
    );
};

export default Header;


/* 1 logic for creating search functionality

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
            setQuery(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for medicine..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;


2. ///////////////////////////////////////////////////

import React, { useState } from 'react';
import SearchBar from './SearchBar';

const MedicineList = () => {
    const [medicines] = useState([
        { id: 1, name: 'Aspirin' },
        { id: 2, name: 'Ibuprofen' },
        { id: 3, name: 'Paracetamol' },
        // Add more medicines as needed
    ]);
    
    const [results, setResults] = useState([]);

    const handleSearch = (query) => {
        const filtered = medicines.filter(medicine =>
            medicine.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    };

    return (
        <div>
            <h1>Online Pharmacy</h1>
            <SearchBar onSearch={handleSearch} />
            <h2>Search Results:</h2>
            <ul>
                {results.length > 0 ? (
                    results.map(medicine => (
                        <li key={medicine.id}>{medicine.name}</li>
                    ))
                ) : (
                    <li>No results found</li>
                )}
            </ul>
        </div>
    );
};

export default MedicineList;



*/