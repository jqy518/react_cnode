import { SET_NODE_LOADING} from '../constants/ActionTypes'
const initialState = {
  nodeLoading:false
}
export default function(state=initialState,action){
  switch(action.type){
    case SET_NODE_LOADING :
      return Object.assign({},state,{nodeLoading:action.value});
    default :
      return state;
  }

}