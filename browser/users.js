import axios from 'axios';

const initialState = {
    pages: [],
    page: {}
}

//action
const GET_PAGES = "GET_PAGES";
const CREATE_PAGE = "CREATE_PAGE";
const DELETE_PAGE = "DELETE_PAGE";
const UPDATE_PAGE = "UPDATE_PAGE";

//action creator
export function getPages (pages){
    return {
        type: GET_PAGES,
        pages
    }
}

//reducer
export default function reducer (state = initialState, action){
    const newState = Object.assign({}, state)
    switch (action.type){
        case GET_PAGES:
            newState.pages = action.pages
            break;
        default:
            return state;
    }
    return newState;
}

//thunks
export const fetchPages = () => dispatch => {
    return axios.get('/wiki')
    .then(res => res.data)
    .then(pages => dispatch(getPages(pages)))
    .catch(error => console.log(error))
}
