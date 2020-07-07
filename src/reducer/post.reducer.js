import{GET_ALL_POST ,ADD_POST,UPDATE_POST,DELETE_POST , GET_SORTED_POST} from '../action/types';

const initialState = {
    allPosts:[],
    sortedPosts:[],
    addPost:"",
    updatePost:"",
    deletePost:"",
}

export default function(state = initialState , action){
    switch(action.type){
        case ADD_POST :
            return{
                ...state,
                addPost:action.payload,
            }
        
        case UPDATE_POST:
            return{
                ...state,
                sortedPosts:[],
                updatePost:action.payload,
            }
            
        case DELETE_POST :
            return{
                ...state,
                sortedPosts:[],
                deletePost:action.payload,
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