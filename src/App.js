import React, { Component, Fragment } from 'react'
import Todos from './componets/Todos'
import AddTodo from './componets/AddTodo'
import {FirebaseState} from './componets/context/firebase/FirebaseState'
function App () {
  return (
    <FirebaseState>
      <Todos />
      <AddTodo/>
    </FirebaseState>
  );
}

export default App