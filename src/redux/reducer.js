import posts from '../data/posts'
import { combineReducers } from 'redux';

function commentsFunc(state = {}, action){
    switch(action.type){
        case 'ADD_COMMENT':
            if(!state[action.postId]){
                return {...state, [action.postId]: [action.comment]}
            } else{
                return {...state, [action.postId]: [...state[action.postId], action.comment]}
            }
        case 'LOAD_COMMENTS':
            return action.comments
        default:
            return state
    }    
}

function postsFunc(state = posts, action){
    switch(action.type){
        case 'REMOVE_POST': 
            console.log(action.index)
            return [...state.slice(0, action.index), ...state.slice(action.index+1)]
        case 'ADD_POST':
            return [...state, action.post]
        case 'LOAD_POSTS':
            return action.posts
        default: 
            return state;
    }
}

const rootReducer = combineReducers({postsFunc, commentsFunc})

export default rootReducer