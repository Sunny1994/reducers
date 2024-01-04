import React, { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from "./Components/TodoForm";
import Todosi from "./Components/Todosi";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []); //todos is the state and dispatch is the action. The dispatch calls
  // the todoreducer function which has the same arguments which are the state and action in reducer.js file
  return (
    //the provider and value comes in because the context api is used here
    <TodoContext.Provider value={{ todos, dispatch }}> 
    
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todosi />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
