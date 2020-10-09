import React from 'react';
import {connect} from 'react-redux';

class EditInfoPage extends React.Component {

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

    onSave = (id) => {
        this.props.dispatch({
            type: 'CHANGE_ITEM',
            payload: id
        });
        this.setState({
            newItem: {
                description: '',
                image_url: ''
            }
        });
        this.props.history.push('/item')
    }

    render() {
        console.log('Item to edit:', this.props.item);
        console.log('Shelf:', this.props.shelf);
        return (
            <>
                {this.props.items.map(item => 
                    <>
                        <input 
                            placeholder='Description'
                            type='text'
                            value={item.description}
                            onChange={(event) => this.handleChangeFor(event, 'description')}
                        />

                        <input 
                            placeholder='Image URL'
                            type='text'
                            value={item.image_url}
                            onChange={(event) => this.handleChangeFor(event, 'image_url')}
                        />

                        <button onClick={() => this.onSave(item.id)}>Save</button>
                    </>
                )}
            </>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    items: reduxState.individualItemReducer
});
export default connect(mapStateToProps)(EditInfoPage);