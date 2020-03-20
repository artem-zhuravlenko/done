import React, { useContext, useEffect} from 'react'
import Todoitem from './Todoitem'
// import { FirebaseState}  from './context/firebase/FirebaseState'
import {FirebaseContext} from './context/firebase/firebaseContext';


function Todos() {

  const {fetchTodos} = useContext(FirebaseContext);

  useEffect( () => { 
    fetchTodos() 
    // eslint-disable-next-line
  }, [] );

    const {state} = useContext(FirebaseContext);

    useEffect( () => { 
      fetchTodos() 
      // eslint-disable-next-line
    }, [state] );

    return state.todos.map( todo => {      
      return (
        <Todoitem todo= {todo}
                  key = {todo.id}/>
      )
    });
}

export default Todos;