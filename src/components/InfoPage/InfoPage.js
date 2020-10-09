import React from 'react';
import {connect} from 'react-redux';

class InfoPage extends React.Component {

  state = {
    newItem: {
      description: '',
      image_url: ''
    }
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        [propertyName]: event.target.value
      }
    });
  }

  addItem = () => {
    this.props.dispatch({
      type: 'CREATE_ITEM',
      payload: this.state.newItem
    });
    this.setState({
      newItem: {
        description: '',
        image_url: ''
      }
    });
  }

  render() {
    return (
      <div>
        <input 
          placeholder='Description'
          type='text'
          value={this.state.newItem.description}
          onChange={(event) => this.handleChangeFor(event, 'description')}
        />

        <input 
          placeholder='Image URL'
          type='text'
          value={this.state.newItem.image_url}
          onChange={(event) => this.handleChangeFor(event, 'image_url')}
        />

        <button onClick={this.addItem}>Add Item</button>
      </div>
    )
  }
}

export default connect()(InfoPage);