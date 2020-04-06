import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SearchBox from '../../components/search-box/search-box.component';
import LOSTFOUND_ITEMS from './collection.data';

import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      items: LOSTFOUND_ITEMS,
      searchField: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { items, searchField } = this.state;
    const filteredItems = items.filter(
      (item) =>
        item.valuable.toLowerCase().includes(searchField.toLowerCase()) ||
        item.nonvaluable.toLowerCase().includes(searchField.toLowerCase()) ||
        item.perishable.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='homepage'>
        <SearchBox
          placeholder='Search Lost and Found Item'
          handleChange={this.handleChange}
        />
        <CollectionPreview items={filteredItems} />
      </div>
    );
  }
}

export default HomePage;
