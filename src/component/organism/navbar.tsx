import * as React from "react";

import { Image } from "../atoms/image";
import { Button } from "../atoms/button";
// import { addTask } from "../../redux/action/Task";
import { useDispatch } from "react-redux";
import { postAuth } from "../../redux/action/Register";
import { Login, Logout } from "../../redux/action/Auth";
import { useTypedSelector } from "../../hooks/useTypeSelector";

type NavbarProps = {
  type?: "dark" | "white";
};
let Navbar = ({ type = "white" }: NavbarProps) => {
  let [showModalLogin, setShowModalLogin] = React.useState(true);
  let [showModalRegister, setShowModalRegister] = React.useState(false);
  let [statusLogin, setStatusLogin] = React.useState(false);

  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [email, setEmail] = React.useState("");
  let dispatch = useDispatch();

  const { history, loading, error } = useTypedSelector(
    (state) => state.dataHistory
  );

  const { auth } = useTypedSelector((state) => state.auth);
  React.useEffect(() => {
    if (auth[0] != null) {
      setShowModalRegister(false);
      setShowModalLogin(false);
    } else {
      setShowModalRegister(false);
      setShowModalLogin(true);
    }
  }, []);

  let logout = async () => {
    await dispatch(Logout());
    setShowModalRegister(false);
    setShowModalLogin(true);
  };

  let register = async () => {
    if (username == "" || email == "" || password == "") {
      alert("form tidak boleh kosong");
    } else {
      await dispatch(postAuth(username, email, password));
      setShowModalRegister(false);
      setShowModalLogin(true);
      setUsername("");
      setPassword("");
      setEmail("");
    }
  };

  let login = async () => {
    if (username == "" || password == "") {
      alert("form tidak boleh kosong");
    } else {
      let response = await dispatch(Login(username, password));
      console.log(response);
      setUsername("");
      setPassword("");
      setEmail("");
      setShowModalRegister(false);
      setShowModalLogin(false);
    }
  };

  let ModalLogin = () => {
    setShowModalRegister(false);
    setShowModalLogin(true);
  };

  let ModalRegister = () => {
    setShowModalLogin(false);
    setShowModalRegister(true);
  };

  let saveTask = () => {
    // let dataTask = {
    //   id: Math.random(),
    //   title: nameTask,
    //   description: description,
    //   status: 0,
    //   createdAt: `${new Date()}`,
    // };
    // dispatch(addTask(dataTask));
  };
  // settings collor
  let types = type == "dark" ? "bg-[#0a0f0f]" : "bg-[#f0f5f5]";

  return (
    <>
      {/* register */}
      {showModalRegister === true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className=" flex bg-gray-bg1">
                    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                      <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                        Create Account🔐
                      </h1>

                      <form>
                        <div>
                          <label htmlFor="email">Username</label>
                          <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            placeholder="Your Username"
                          />
                        </div>
                        <div>
                          <label htmlFor="email">Email</label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div>
                          <label htmlFor="password">Password</label>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                          />
                        </div>

                        <div className="flex justify-center items-center mt-6">
                          <Button
                            action={() => ModalLogin()}
                            type="small-primary"
                            label="Back"
                            classname=""
                            textColor="white"
                          />
                          <div className="ml-[9px]">
                            <Button
                              action={() => register()}
                              type="small-primary"
                              label="Register"
                              classname=""
                              textColor="white"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* login */}
      {showModalLogin === true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className=" flex bg-gray-bg1">
                    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
                      <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                        Login 🔐
                      </h1>

                      <form>
                        <div>
                          <label htmlFor="email">Username</label>
                          <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="email"
                            placeholder="Username"
                          />
                        </div>
                        <div>
                          <label htmlFor="password">Password</label>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id="password"
                            placeholder="Your Password"
                          />
                        </div>

                        <div className="flex justify-center items-center mt-6">
                          <Button
                            action={() => login()}
                            type="small-primary"
                            label="Login"
                            classname=""
                            textColor="white"
                          />
                          <div className="ml-[9px]">
                            <Button
                              action={() => ModalRegister()}
                              type="small-primary"
                              label="Create account"
                              classname=""
                              textColor="white"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*footer*/}
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
            {statusLogin == false ? (
              <>
                <Button
                  action={() => logout()}
                  type="small-primary"
                  label="Logout"
                  classname=""
                  textColor="white"
                />
              </>
            ) : null}
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

export default Navbar;
