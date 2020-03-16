import React, { Component } from 'react'
import {db} from '../firebase';  

export default class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        title: "",
        role: ""
      },
    };
  }

  addUser = () => {
    const addTodoField = document.getElementsByClassName("addTodo");

    const data = {
      ...this.state.formValues,
      name: "Alfred Hitchcock",
      // value: addTodoField.value,
      uid: new Date().getTime()
    };
  
    // adding data here
    db.collection("Authors")
      .doc(data.uid.toString())
      .set(data)
      .then(() => {
        // NotificationManager.success("A new user has been added", "Success");
        console.log("Success")
        // window.location = "/";
      })
      .catch(error => {
        // NotificationManager.error(error.message, "Create user failed");
        console.log(error);
        // this.setState({ isSubmitting: false });
      });
  };

  render() {
    return (
      <div>
        <input className="addTodo" type="text"/>
        <button className="submit" onClick={this.addUser()} >Submit</button>
      </div>
    )
  }
}
