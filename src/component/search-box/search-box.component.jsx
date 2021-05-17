import React from 'react';

import './search-box.styles.css';

// Object Destructuring
export const SearchBox = ( {placeholder, handleChange} ) => (
    <input
    className='search'
    type= 'search'
    placeholder={ placeholder }
    onChange= {handleChange}
    />
)
