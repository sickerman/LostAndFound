import React from 'react';

import './search-box.styles.scss';

const SearchBox = ({ placeholder, handleChange }) => (
  <div className='search'>
    <input
      className='search-input'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;
