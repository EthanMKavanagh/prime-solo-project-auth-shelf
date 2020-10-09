const individualItemReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_ITEM':
            return action.payload;
        default:
            return state;
    }
}

export default individualItemReducer;