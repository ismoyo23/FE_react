import * as React from "react";

import { Image } from "../atoms/image";
import { Button } from "../atoms/button";
import { addTask } from "../../redux/action/Task";
import { useDispatch } from "react-redux";

import { Dispatch } from "redux";

type NavbarProps = {
  type?: "dark" | "white";
};
export let Navbar = ({ type = "white" }: NavbarProps) => {
  let [showModal, setShowModal] = React.useState(false);

  let [nameTask, setNameTask] = React.useState<string>("");
  let [description, setDescription] = React.useState<string>("");

  // dispatch settings
  const dispatch: Dispatch<any> = useDispatch();

  let saveTask = () => {
    let dataTask = {
      id: Math.random(),
      title: nameTask,
      description: description,
      status: 0,
      createdAt: `${new Date()}`,
    };
    dispatch(addTask(dataTask));
  };
  // settings collor
  let types = type == "dark" ? "bg-[#0a0f0f]" : "bg-[#f0f5f5]";

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
                    onClick={saveTask}
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

      <nav
        className={[
          "border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800",
          types,
        ].join(" ")}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com" className="flex items-center">
            <Image classname="mr-3 h-6 sm:h-9" name="majoo.png" type="custom" />
          </a>
          <div className="flex md:order-2">
            <Button
              action={() => setShowModal(true)}
              type="small-primary"
              label="Add Task"
              classname=""
              textColor="white"
            />
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          ></div>
        </div>
      </nav>
    </>
  );
};
