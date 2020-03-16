import React, { useContext } from 'react'
import Todoitem from './Todoitem'
// import { FirebaseState}  from './context/firebase/FirebaseState'
import {FirebaseContext} from './context/firebase/firebaseContext';


function Todos() {
    const {todos, markComplete, delTodo} = useContext(FirebaseContext);

    return todos.map((todo) => (
      <Todoitem todo= {todo}
                key = {todo.id}
                markComplete = {markComplete}
                delTodo = {delTodo}/>
    ));
}

export default Todos;