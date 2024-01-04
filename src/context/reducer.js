export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "";

export const todoReducer= (state, dispatch) => { //here the add_todo and remove_todo values are brought in 
  //by their states and an action 
    //is provided to them to update them to the new/updated state 
    //based on the action given. The action is an object which consists 
    //of multiple key values like type, payload and etc
  
    switch (dispatch.type) {

    case ADD_TODO:
      return [...state, dispatch.payload] //returns the complete state along with its unique id which 
      //is from the payload. 
      //this action.payload is the information package that carries information about 
      //each todo text you type each time we click on the add button
      //which returns the typed text along with its uuid(not seen) to tag on the webpage 
      //or any other information given inside it   
    
      case REMOVE_TODO:
      return state.filter(todo => todo.id !== dispatch.payload);
      //so as you type and add each todo with its id on the webpage, the filter method 
      //is used to return the empty array holding 
      //true to the condition in the filter which results to nothing
    default:
      return state;
  }
};
