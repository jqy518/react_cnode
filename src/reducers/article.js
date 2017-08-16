import { SET_LIST,UPDATE_LIST} from '../constants/ActionTypes'
const initialState = [
  {
    id:'58ad76db7872ea0864fedfcc',
    author_id:'51f0f267f4963ade0e08f503',
    tab:'share',
    title:'xxxxxxxxxxxxxxxxxxxxx',
    good:true,
    top:true,
    create_at:'2017-02-22T11:32:43.547Z',
    last_reply_at:'2017-07-01T01:40:32.030Z',
    visit_count:6788,
    reply_count:89,
    author:{
      loginname:'leli',
      avatar_url:'https://avatars1.githubusercontent.com/u/2081487?v=3&s=120'
    }
  }
]

export default function(state=initialState,action){
  switch(action.type){
    case SET_LIST :
      return [...action.list];
    case UPDATE_LIST :
      return [...state,...action.list]
    default :
    return state  
  }
}