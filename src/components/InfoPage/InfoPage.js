import React from 'react';
import {connect} from 'react-redux';

class InfoPage extends React.Component {
 componentDidMount () {
   this.props.dispatch({
     type: 'FETCH_SHELF'
   });
 }


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
        <p>Info Page</p>
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

        {this.props.shelf.map(item =>
          <li key={item.id}>
            {item.description}
            <img src={item.image_url} width="50" height="50"/>
          </li>
          )}
      </div>
    )
  }
}

const mapStateToProp = reduxState => ({
  shelf: reduxState.shelf
});
export default connect(mapStateToProp)(InfoPage);

