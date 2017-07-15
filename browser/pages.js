import axios from 'axios';

//thunks
export const fetchPages = () => dispatch => {
    return axios.get('/wiki')
    .then(res => res.data)
    .then(pages => dispatch(getPages(pages)))
    .catch(error => console.log(error));
};

const initialState = {
    pages: [],
    page: {}
};

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
    };
}
export function createPages (page){
    return {
        type: CREATE_PAGE,
        page
    };
}
export function deletePages (page){
    return {
        type: DELETE_PAGE,
        page
    };
}
export function updatePages (page){
    return {
        type: UPDATE_PAGE,
        page
    };
}
//reducer
export default function reducer (state = initialState, action){
    const newState = Object.assign({}, state);
    switch (action.type){
        case GET_PAGES:
            newState.pages = action.pages;
            break;
        case CREATE_PAGE:
            newState.pages = [...state.pages, action.page];
            break;
        case DELETE_PAGE:
            newState.pages = state.pages.filter(page => page !== action.page);
            break;
        case UPDATE_PAGE:
            newState.pages = state.pages.map(page => {
                if (page.id === action.page.id) return action.page;
                return page;
            });
            break;

        default:
            return state;
    }
    return newState;
}

