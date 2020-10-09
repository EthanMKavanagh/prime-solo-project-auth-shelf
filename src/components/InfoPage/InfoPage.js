import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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

  removeItem = (id) => {
    console.log('removeItem hit with id:', id);
    this.props.dispatch({
      type: "DELETE_ITEM",
      payload: id
    });
  }

  editButton = (id) => {
    this.props.dispatch({
      type: 'FETCH_INDIVIDUAL_ITEM',
      payload: id
    });
    this.props.history.push(`/info/edit/${id}`)
  }

  render() {
    console.log('this user', this.props.user);
    return (
      <div>
        <p>Info Page</p>
        { this.props.user.username === undefined ?
            <>
            </>:
            <>
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
            </>
        }

        {this.props.shelf.map(item =>
          <li key={item.id}>
            {item.description}
            <img src={item.image_url} width="50" height="50"/>
            { this.props.user.username === undefined ?
                <>
                </>:
                <>
                  <button onClick={() => this.removeItem(item.id)}>delete this</button>
                  <button onClick={() => this.editButton(item.id)}>Edit Item</button>
                </>
            }
          </li>
        )}
      </div>
    )
  }
}



const mapStateToProp = reduxState => ({
  shelf: reduxState.shelf,
  user: reduxState.user,
});
export default connect(mapStateToProp)(withRouter(InfoPage));

