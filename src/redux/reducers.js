import { Types } from './Types';


const initialState = {
    profile:'',
    apiurl:"http://localhost:8080/steedapp/",
    usermenus:[],
  //  apiurl:"http://143.110.176.106:8080/steedapp/",
}


const reducer = (state = initialState, action) => {
   switch (action.type) {
      case Types.LOGIN:
     
        return {
          ...state,
          profile: action.payload.user[0],
        }
      case Types.ADD_USER:
      //  console.log('calling ADD_USER--<', action.payload.menu)
        return {
          ...state,
          profile: action.payload.user[0],
      }
      case Types.ADD_MENU:
      
        return {
          ...state,
          usermenus: action.payload.user,
      }
      case Types.UPDATE_USER:
        return {
          ...state,
          profile: action.payload.user,
        }
      case Types.UPDATE_PROFILE_PICTURE:
        return {
          ...state,
          profile: {
            ...state.profile,
            profileImage: action.payload.image
          }
        }
      case Types.FORM_SUBMITION_STATUS:
        return {
          ...state,
          formSubmitted: action.payload.status
        }
      default:
        return state;
    }
  }
  
  export default reducer;
