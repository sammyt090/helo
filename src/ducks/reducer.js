const initialState ={
    username: '',
    profile_pic: '',
    id: null
    
}
const GET_USER = "GET_USER"



export function getUser(username, id, profile_pic){
    return {
        type: GET_USER,
        payload: {
            username,
            id,
            profile_pic
            
        }
    }
}


export default function (state = initialState, action){
 switch (action.type) {
     case GET_USER:
         return {...state, username: action.payload.username, profile_pic: action.payload.profile_pic, id: action.payload.id}
    default: 
     return state
 }
}