export function addTask(task: ITask) {
  const action: TaskAction = {
    type: "ADD_TASK",
    task,
  };

  return simulateHttpRequest(action);
}

export function removeTask(task: ITask) {
  const action: TaskAction = {
    type: "REMOVE_TASK",
    task,
  };

  return simulateHttpRequest(action);
}

export function updateTask(task: ITask) {
  const action: TaskAction = {
    type: "UPDATE_TASK",
    task,
  };

  return simulateHttpRequest(action);
}

export function approveTask(task: ITask) {
  const action: TaskAction = {
    type: "APPROVE_TASK",
    task,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
