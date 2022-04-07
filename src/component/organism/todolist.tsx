import React, { useEffect } from "react";
import { Card } from "../molecules/card";
import { Text } from "../atoms/text";
import { Button } from "../atoms/button";
// import { useSelector, shallowEqual, useDispatch } from "react-redux";
// import { removeTask, addTask, updateTask } from "../../redux/action/Task";
// import axios from "axios";
// import moment from "moment";

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
  // ibarat ke 3 pemain mempunyai 6 dadu
  let [pemain1, setPemain1] = React.useState(6);
  let [pemain2, setPemain2] = React.useState(6);
  let [pemain3, setPemain3] = React.useState(6);

  useEffect(() => {}, []);
  let acakDadu = () => {
    let resultpemain1 = [];
    let resultpemain2 = [];
    let resultpemain3 = [];

    let evaluasipemain1 = [];
    let evaluasipemain2 = [];
    let evaluasipemain3 = [];

    // pemain1
    for (let i = 0; i < pemain1; i++) {
      // niali ini akan mengacak 1-6
      let value = Math.floor(Math.random() * 6) + 1;
      resultpemain1.push(value);
      if (value === 6) {
        setPemain1(pemain1 - 1);
        evaluasipemain1.push(value);
      } else if (value == 1) {
        setPemain1(pemain1 - 1);
        setPemain2(pemain2 + 1);
      }
    }
    console.log(resultpemain1);
    evaluasipemain1.length = 6; // set length to remove elements
    console.log(evaluasipemain1, "evaluasi");
    //Runs only on the first render
  };
  // style component
  let cssNewtask = [];

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
      <div className="w-[100%]  mt-[9px]">
        <div className="justify-center flex">
          <Button
            action={() => acakDadu()}
            type="small-primary"
            label="Acak dadu"
            classname=""
            textColor="white"
          />
          <div className="ml-[3px]">
            <Button
              action={() => setShowModal(true)}
              type="small-primary"
              label="History"
              classname=""
              textColor="white"
            />
          </div>
        </div>
        <div className="flex h-screen justify-center mt-[12px]">
          <div className="grid grid-cols-1   md:grid-cols-2 gap-10 mb-[30px]">
            <div className="max-w-sm w-[310px] h-[40rem] overflow-y-auto rounded overflow-hidden shadow-lg bg-[#a3c2c2]">
              <div>
                <div className={cssNewtask.join(" ")}>
                  <Text
                    label="Nilai lemparan"
                    type="medium"
                    styles={["text-gray-700", "text-base", "font-semibold"]}
                  />
                </div>
                <div className="mt-[20px] ml-3 mr-3">
                  <div>
                    <Card
                      type="default"
                      name={""}
                      description={""}
                      createdAt={""}
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2"></div>
            </div>

            <div className="max-w-sm w-[310px] h-[40rem] overflow-y-auto rounded overflow-hidden shadow-lg bg-[#a3c2c2]">
              <div>
                <div className={cssFinishTask.join(" ")}>
                  <Text
                    label="Evaluasi"
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
                  <Card
                    type="default"
                    name={""}
                    description={""}
                    createdAt={""}
                  />
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
