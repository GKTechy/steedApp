import { Types } from './Types';


const initialState = {
    profile: {
      userId:"100",
      firstName: '',
      lastName: '',
      telephone: '',
      age: 28,
      email: '',
      state: '',
      country: '',
      address: 'Home',
      address1: '',
      address2: '',
      interests: [],
      profileImage: '',
      subscribenewsletter: false
    },
  //  apiurl:"http://localhost:8080/steedapp/",
    apiurl:"http://139.59.8.226:8080/steedapp/",
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case Types.LOGIN:
      console.log('login', action.payload.user)
        return {
          ...state,
          profile: action.payload.user,
          formSubmitted: false // after update user formsubmition reset
        }
      case Types.ADD_USER:
        return {
          ...state,
          profile: action.payload.user,
          formSubmitted: false // after update user formsubmition reset
        }
      case Types.UPDATE_USER:
        return {
          ...state,
          profile: action.payload.user,
          formSubmitted: false // after update user formsubmition reset
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
