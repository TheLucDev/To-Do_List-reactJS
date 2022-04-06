import {
  add_task,
  del_task,
  done_task,
  edit_task,
  update_task,
} from "../type/ToDoListType";

export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask,
});

export const doneTaskAction = (taskId) => ({
  type: done_task,
  taskId,
});
export const deleteTaskAction = (taskId) => ({
  type: del_task,
  taskId,
});
export const editTaskAction = (task) => ({
  type: edit_task,
  task,
});
export const updateTaskAction = (taskName) => ({
  type: update_task,
  taskName,
});
