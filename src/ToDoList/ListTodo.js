import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
} from "./redux/action/ToDoListAction";

class ListTodo extends Component {
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <tr
            key={index}
            className="d-flex justify-content-between align-items-center border border-warning p-2 mb-2"
          >
            <td>
              <i class="fa fa-chevron-circle-right mr-2"></i>
              {task.taskName}
            </td>
            <td>
              <div className="d-flex justify-content-around">
                <button
                  onClick={() => {
                    this.props.dispatch(editTaskAction(task));
                  }}
                  className="btn btn-warning"
                >
                  <i class="fa fa-edit"></i>
                </button>
                <button
                  onClick={() => {
                    this.props.dispatch(doneTaskAction(task.id));
                  }}
                  className="btn btn-success mx-1"
                >
                  <i class="fa fa-check"></i>
                </button>
                <button
                  onClick={() => {
                    this.props.dispatch(deleteTaskAction(task.id));
                  }}
                  className="btn btn-secondary"
                >
                  <i class="fa fa-trash-alt"></i>
                </button>
              </div>
            </td>
          </tr>
        );
      });
  };
  render() {
    return (
      <div>
        <hr />
        <p className=""> --To do--</p>

        {this.renderTaskToDo()}
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(MapStateToProps)(ListTodo);
