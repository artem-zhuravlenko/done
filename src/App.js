import React  from 'react'
import Todos from './componets/Todos'
import AddTodo from './componets/AddTodo'
import {FirebaseState} from './componets/context/firebase/FirebaseState'
// import { FirebaseContext } from './componets/context/firebase/firebaseContext'

function App () {

  return (
    <FirebaseState>
      <Todos />
      <AddTodo/>
    </FirebaseState>
  );
}

export default App