import React from 'react';
import { connect } from 'react-redux';

class InfoPage extends React.Component {

  removeItem = () => {
    console.log('removeItem hit.');
    this.props.dispatch({
      type: "DELETE_ITEM",
      //payload: this.props.item.id
    });
  }

  render() {
    return (
      <div>
        <p>Info Page</p>
        <button onClick={this.removeItem}>deleteTest</button>
      </div>
    )
  }
}

export default connect()(InfoPage);