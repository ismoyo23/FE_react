import React from "react";
import { Card } from "../molecules/card";
import { Text } from "../atoms/text";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { removeTask, addTask, updateTask } from "../../redux/action/Task";
import axios from "axios";
import moment from "moment";

import { Dispatch } from "redux";

interface TodoProps {
  Newtask?: "success" | "primary" | "info";
  Progresstask?: "success" | "primary" | "info";
  FinishTask?: "success" | "primary" | "info";
}
export let TodoList = ({
  Newtask = "primary",
  Progresstask = "success",
  FinishTask = "info",
}: TodoProps) => {
  let [showModal, setShowModal] = React.useState(false);
  let [id, setId] = React.useState(0);
  let [nameTask, setNameTask] = React.useState<string>("");
  let [description, setDescription] = React.useState<string>("");
  const task: readonly ITask[] = useSelector(
    (state: TaskState) => state.task,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}`).then((response) => {
      for (let i = 0; i <= response.data.length; i++) {
        dispatch(addTask(response.data[i]));
      }
    });
  }, []);

  const deleteData = React.useCallback(
    (task: ITask) => dispatch(removeTask(task)),
    [dispatch, removeTask]
  );

  const detailTask = React.useCallback(
    (task: ITask) => (
      setShowModal(true),
      setId(task.id),
      setNameTask(task.title),
      setDescription(task.description)
    ),
    [dispatch, removeTask]
  );

  let updatedTask = () => {
    let dataTask = {
      id: id,
      title: nameTask,
      description: description,
      status: 0,
      createdAt: `${new Date()}`,
    };
    dispatch(updateTask(dataTask));
  };

  // style component
  let cssNewtask = [];
  let cssProgresstask = [];
  let cssFinishTask = [];
  switch (Newtask) {
    case "success":
      cssNewtask.push("bg-[#72D912]", "px-2", "py-4");
      break;
    case "primary":
      cssNewtask.push("bg-blue-500", "px-2", "py-4");
      break;
    case "info":
      cssNewtask.push("bg-[#9900cc]", "px-2", "py-4");
      break;

    default:
      break;
  }

  switch (Progresstask) {
    case "success":
      cssProgresstask.push("bg-[#72D912]", "px-2", "py-4");
      break;
    case "primary":
      cssProgresstask.push("bg-blue-500", "px-2", "py-4");
      break;
    case "info":
      cssProgresstask.push("bg-[#9900cc]", "px-2", "py-4");
      break;

    default:
      break;
  }

  switch (FinishTask) {
    case "success":
      cssFinishTask.push("bg-[#72D912]", "px-2", "py-4");
      break;
    case "primary":
      cssFinishTask.push("bg-blue-500", "px-2", "py-4");
      break;
    case "info":
      cssFinishTask.push("bg-[#9900cc]", "px-2", "py-4");
      break;

    default:
      break;
  }
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">New task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="bg-white  mb-4">
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Name Task
                      </label>
                      <input
                        value={nameTask}
                        onChange={(e) => setNameTask(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nameTask"
                        type="text"
                        placeholder="Nama Task"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-left">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Description
                        </label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          id="description"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter some long form content."
                        ></textarea>
                      </label>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updatedTask}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className="w-[100%]  mt-[9px]">
        <div className="flex h-screen justify-center">
          <div className="grid grid-cols-1   md:grid-cols-2 gap-10 mb-[30px]">
            <div className="max-w-sm w-[310px] h-[40rem] overflow-y-auto rounded overflow-hidden shadow-lg bg-[#a3c2c2]">
              <div>
                <div className={cssNewtask.join(" ")}>
                  <Text
                    label="New Task"
                    type="medium"
                    styles={["text-gray-700", "text-base", "font-semibold"]}
                  />
                </div>
                <div className="mt-[20px] ml-3 mr-3">
                  {task.map((task: ITask) => (
                    <div>
                      {task.status == 0 ? (
                        <Card
                          detailTask={() => detailTask(task)}
                          removeTask={() => deleteData(task)}
                          type="default"
                          name={task.title}
                          description={task.description}
                          createdAt={moment(task.createdAt).format(
                            "dddd, MMMM Do YYYY LT"
                          )}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pt-4 pb-2"></div>
            </div>

            <div className="max-w-sm w-[310px] h-[40rem] overflow-y-auto rounded overflow-hidden shadow-lg bg-[#a3c2c2]">
              <div>
                <div className={cssProgresstask.join(" ")}>
                  <Text
                    label="Finish"
                    type="medium"
                    styles={[
                      "text-gray-700",
                      "text-base",
                      "font-semibold",
                      "text-[white]",
                    ]}
                  />
                </div>
                <div className="mt-[20px] ml-3 mr-3">
                  {task.map((task: ITask) => (
                    <div>
                      {task.status == 1 ? (
                        <Card
                          detailTask={() => detailTask(task)}
                          removeTask={() => deleteData(task)}
                          type="default"
                          name={task.title}
                          description={task.description}
                          createdAt={moment(task.createdAt).format(
                            "dddd, MMMM Do YYYY LT"
                          )}
                        />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pt-4 pb-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
