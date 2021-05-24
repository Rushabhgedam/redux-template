
const initialState = {
    messageObj: {},
  };
  
  export default MessageInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE_INFO':
        return { ...state,
          messageObj: action.payload.messageObj,        
        };
      case 'DELETE_MESSAGE_INFO':
        return { ...state,
          messageObj: {},
        };
      default:
        return state;
    }
  };
  
  export const ActionAddMessage = (data) => {
    return {
      type: 'ADD_MESSAGE_INFO',
      payload: data
    };
  };
  
  export const ActionDeleteMessage = () => {
    return {
      type: 'DELETE_MESSAGE_INFO',    
    };
  };