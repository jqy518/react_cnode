import { SET_USER_INFO} from '../constants/ActionTypes'
const initialState = {
}
export default function(state=initialState,action){
  switch(action.type){
    case SET_USER_INFO :
      return Object.assign({},state,action.value);
    default :
      return state;
  }

}