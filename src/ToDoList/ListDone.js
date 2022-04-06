import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTaskAction } from "./redux/action/ToDoListAction";

class ListDone extends Component {
  renderTaskComplete = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <table>
            <tr
              key={index}
              className="d-flex justify-content-between align-items-center border border-success p-2 mb-2"
            >
              <td>
                <i className="fa fa-chevron-circle-right mr-2"></i>
                {task.taskName}
              </td>
              <td>
                <div className="d-flex justify-content-around">
                  <button
                    onClick={() => {
                      this.props.dispatch(deleteTaskAction(task.id));
                    }}
                    className="btn btn-secondary"
                  >
                    <i className="fa fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          </table>
        );
      });
  };
  render() {
    return (
      <div>
        <hr />
        <p className=""> --Task done--</p>
        {this.renderTaskComplete()}
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    taskList: state.ToDoListReducer.taskList,
  };
};

export default connect(MapStateToProps)(ListDone);
