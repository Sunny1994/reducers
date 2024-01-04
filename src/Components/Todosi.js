import React,{useContext} from "react"
import {ListGroup, ListGroupItem} from "reactstrap"
import {FaCheckDouble} from "react-icons/fa"
import { TodoContext } from "../context/TodoContext"
import { REMOVE_TODO } from "../context/reducer"

const Todosi = () => {
    const { todos, dispatch } = useContext(TodoContext); //you bring all the todos and the dispatch method using
    //usecontext api
   
    return (
      <ListGroup className="mt-5 mb-2 items">
        {todos.map(todo => {return( //here the map function is used to return and print the typed todo element and also the dispatch method is clicked to invoke the remove todo function. And I see no point in writing Todo key value here
          <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span
              className="float-right"
              onClick={() => {
                dispatch({
                  type: REMOVE_TODO,
                  payload: todo.id
                })
              }}
            >
              <FaCheckDouble />
            </span>
          </ListGroupItem>
        )})}
      </ListGroup>
    );
  };
  
  export default Todosi;
  