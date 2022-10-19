import {createStore} from 'redux';

const initialState = {
    loading: false,
    names : 'Dhanissa Thifa',
    address: 'Batang',
    age:'18',
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;