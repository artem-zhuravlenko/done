import React, { Component, useContext, useState } from 'react'
import {db} from '../firebase';  
import { FirebaseContext } from './context/firebase/firebaseContext';

function AddTodo() {


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     formValues: {
  //       title: "",
  //       role: ""
  //     },
  //   };
  // }

  // addUser = () => {
  //   const addTodoField = document.getElementsByClassName("addTodo");

  //   const data = {
  //     ...this.state.formValues,
  //     name: "Alfred Hitchcock",
  //     // value: addTodoField.value,
  //     uid: new Date().getTime()
  //   };
  
  //   // adding data here
  //   db.collection("Authors")
  //     .doc(data.uid.toString())
  //     .set(data)
  //     .then(() => {
  //       // NotificationManager.success("A new user has been added", "Success");
  //       console.log("Success")
  //       // window.location = "/";
  //     })
  //     .catch(error => {
  //       // NotificationManager.error(error.message, "Create user failed");
  //       console.log(error);
  //       // this.setState({ isSubmitting: false });
  //     });
  // };

  const {addTodo} = useContext(FirebaseContext)

  const [title, setTitle] = useState('');

  return (
    <div>
      <input 
        className="addTodo" 
        value = {title} 
        onChange = {e => setTitle(e.target.value)} 
        type="text"/>
      <button 
      className="submit"
      onClick ={() => {
        addTodo(title) 
        setTitle('')
      } }
      >Submit</button>
    </div>
  )
}

export default AddTodo;