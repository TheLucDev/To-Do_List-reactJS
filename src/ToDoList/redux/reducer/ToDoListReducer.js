import { add_task, del_task, done_task, edit_task } from "../type/ToDoListType";

const initialState = {
  taskList: [
    // { id: "task 1", taskName: "task 1", done: true },
    // { id: "task 2", taskName: "task 2", done: false },
    // { id: "task 3", taskName: "task 3", done: true },
    // { id: "task 4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: "task 1", taskName: "task 1", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      //kiem tra rong

      if (action.newTask.taskName.trim() === "") {
        alert("Nhập vào tên việc cần làm!");
        return { ...state };
      }
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index != -1) {
        alert("Trùng rồi, mời nhập lại!");
        return { ...state };
      }
      taskListUpdate.push(action.newTask);
      //xu ly xong thi gan tasklist moi vao tasklist hien tai
      state.taskList = taskListUpdate;
      return { ...state };
    }
    case done_task: {
      let taskListUpdate = [...state.taskList];

      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);

      if (index !== -1) {
        taskListUpdate[index].done = true;
      }

      // state.taskList = taskListUpdate;

      return { ...state, taskList: taskListUpdate };
    }

    case del_task: {
      // console.log("action", action);
      let taskListUpdate = [...state.taskList];

      taskListUpdate = taskListUpdate.filter(
        (task) => task.id !== action.taskId
      );

      return { ...state, taskList: taskListUpdate };
    }

    case edit_task: {
      return { ...state, taskEdit: action.task };
    }

    default:
      return { ...state };
  }
};
