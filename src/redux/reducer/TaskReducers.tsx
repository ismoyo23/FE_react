const initialState: TaskState = {
  task: [],
};

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask: ITask = {
        id: action.task.id, // not really unique
        title: action.task.title,
        description: action.task.description,
        status: action.task.status,
        createdAt: action.task.createdAt,
      };
      return {
        task: state.task.concat(newTask),
      };

    case "REMOVE_TASK":
      const updatedTask: ITask[] = state.task.filter(
        (task) => task.id !== action.task.id
      );
      return {
        ...state,
        task: updatedTask,
      };

    case "UPDATE_TASK":
      const setTask: ITask = {
        id: action.task.id, // not really unique
        title: action.task.title,
        description: action.task.description,
        status: action.task.status,
        createdAt: action.task.createdAt,
      };

      state.task.map((item) => {
        if ((setTask.id = item.id)) {
          return {
            ...state,
            task: setTask,
          };
        } else {
          alert("ok");
        }
      });
  }

  return state;
};

export default reducer;
