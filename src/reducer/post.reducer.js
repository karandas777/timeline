import{GET_ALL_POST ,ADD_POST, GET_SORTED_POST} from '../action/types';

const initialState = {
    allPosts:[],
    sortedPosts:[],
    addPost:"",
}

export default function(state = initialState , action){
    switch(action.type){
        case ADD_POST :
            return{
                ...state,
                addPost:action.payload,
            }

        case GET_ALL_POST : 
            return{
                ...state,
                allPosts:action.payload,
            }
        case GET_SORTED_POST :
            return{
                ...state,
                sortedPosts:action.payload,
            }
        default :
            return state
    }
}