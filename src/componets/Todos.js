import React, { useContext } from 'react'
import Todoitem from './Todoitem'
// import { FirebaseState}  from './context/firebase/FirebaseState'
import {FirebaseContext} from './context/firebase/firebaseContext';


function Todos() {
    const {state} = useContext(FirebaseContext);

    // console.log(state)
    return state.map( todo => (
      <Todoitem todo= {todo}
                key = {todo.id}/>
    ));
}

export default Todos;