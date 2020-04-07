import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttons.component';

import './add-edit-styles.scss';

class AddEditItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFound: '',
      valuable: '',
      nonValuable: '',
      perishable: '',
      area: '',
      finder: '',
      claimedBy: '',
      dateClaimed: '',
      items: [],
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const location = window.location.pathname.toUpperCase().split('/');
    return (
      <div className='add-edit-item'>
        <h2 className='title'>
          <span className='add-edit'>{location} </span>LOST AND FOUND ITEMS
        </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='valuable'
            type='text'
            handleChange={this.handleChange}
            value={this.state.valuable}
            label='Valuable'
          />
          <FormInput
            name='nonvaluable'
            type='text'
            handleChange={this.handleChange}
            value={this.state.nonValuable}
            label='Non Valuable'
          />
          <FormInput
            name='perishable'
            type='text'
            handleChange={this.handleChange}
            value={this.state.perishable}
            label='Perishable'
          />
          <FormInput
            name='area'
            type='text'
            handleChange={this.handleChange}
            value={this.state.area}
            label='Area/Location'
            required
          />
          <FormInput
            name='finder'
            type='text'
            handleChange={this.handleChange}
            value={this.state.finder}
            label='Finder'
            required
          />
          <FormInput
            name='claimedby'
            type='text'
            handleChange={this.handleChange}
            value={this.state.claimedBy}
            label='Claimed By'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Submit</CustomButton>
            <Link className='cancel' to='/'>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEditItem;
