import { combineReducers } from 'redux';
import NavReducer from './NavReducer';
import MessageInfoReducer from './MessageReducer';



const AppReducer = combineReducers({
  nav: NavReducer,
  messageReducer : MessageInfoReducer
});

export default AppReducer;