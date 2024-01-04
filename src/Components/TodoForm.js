import React, {useState, useContext} from  "react"
import { Form,
    Input,
    Button,
    InputGroup,
    }from "reactstrap"

import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/reducer"

const TodoForm=()=>{
    const [todoString, setTodoString]= useState("")
    const { dispatch }= useContext(TodoContext) //to create the dispatch using context api

    const handleSubmit = (e) =>{ //creating a method to trigger the dispatch
        e.preventDefault()
        if(todoString===""){
            return alert ("please enter a todo")
        }

        const todo={
            todoString,
            id: v4() //this method returns a unique string id from UUid package for every todo id as per doucmentation
        }
        dispatch({  
            type: ADD_TODO, //dispatch by default carries the action object type and an optional payload information package
            payload: todo    //about the action type object
        })
        setTodoString("") //to empty out the form once you click the add button
    }
    return(
        // the input group tag encloses the buttons or the text inside  into one line
        <Form onSubmit={handleSubmit}>
            
            <InputGroup> 
            <Input
            type="text" 
            name="todo"
            id="todo"
            placeholder="Your next to do"
            value={todoString}

            onChange={e => setTodoString(e.target.value)}
            />
            
  <Button color="warning" className="input-group-text" id="basic-addon2">Add</Button>

            </InputGroup>
            
        </Form>
    )
}

export default TodoForm