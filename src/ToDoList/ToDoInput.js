import React, { Component } from "react";
import { connect } from "react-redux";
import { addTaskAction } from "./redux/action/ToDoListAction";

class ToDoInput extends Component {
  state = {
    taskName: "",
  };
  // handleChange = (e)=>{
  //   let{name,value} = e.target.value
  //   this.setState({
  //     [name]:value,
  //   })
  // }

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }

  // static getDerivedStateFromProps(newProps, currentState) {
  //   let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
  //   return newState;
  // }

  render() {
    return (
      <div>
        <div className="form-group">
          <div className="text-center">
            <label className="display-4 py-3 " htmlFor="input">
              To Do List
            </label>
          </div>
          <div className="d-flex">
            <input
              value={this.state.taskName}
              onChange={(e) => {
                this.setState({
                  taskName: e.target.value,
                });
              }}
              type="text"
              name="taskName"
              id="input"
              className="form-control w-50"
              placeholder="Việc cần làm"
              aria-describedby="helpId"
            />
            <button
              onClick={() => {
                //lay thong tin tu input
                let { taskName } = this.state;
                //tao ra 1 task object
                let newtask = {
                  id: Date.now(), //11102020050302
                  taskName: taskName,
                  done: false,
                };
                // console.log(task);
                //dua task len redux = dispatch
                this.props.dispatch(addTaskAction(newtask));
              }}
              className="btn btn-success ml-3 pl-3"
            >
              Thêm <i class="fa fa-plus"></i>
            </button>
            <button className="btn btn-warning ml-2 px-3">
              Cập nhật <i class="fa fa-sync"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    //so sanh
    if (prevProps.taskEdit.id !== this.props.taskEdit.id)
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
  }
}

const MapStateToProps = (state) => {
  return {
    taskName: state.ToDoListReducer.taskList.taskName,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

export default connect(MapStateToProps)(ToDoInput);
