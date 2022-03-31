import React, { Component } from "react";
import ListDone from "./ListDone";
import ListTodo from "./ListTodo";
import Theme from "./Theme";
import ToDoInput from "./ToDoInput";

export default class ToDoListRedux extends Component {
  render() {
    return (
      <div className="border border-secondary p-4">
        <Theme />
        <ToDoInput />
        <ListTodo />
        <ListDone />
      </div>
    );
  }
}
