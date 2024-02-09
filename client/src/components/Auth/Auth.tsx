import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

interface FormType {
  name: string;
  email: string;
  password: string;
}

const Auth = () => {
  const [mode, setMode] = useState("login");
  const changeMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };
  const [formData, setFormData] = useState<FormType>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const localStorageHandler = useLocalStorage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check if deatils exist

    if (mode === "login") {
      // Login
      if (formData.email === "" || formData.password === "") {
        alert("Please fill in all fields");
        return;
      }
      localStorageHandler({
        key: "user",
        payload: {
          ...formData,
          todos: [],
          id: "rxn",
          token: "token",
        },
        action: "set",
      });
    } else {
      // Register
      if (
        formData.name === "" ||
        formData.email === "" ||
        formData.password === ""
      ) {
        alert("Please fill in all fields");
        return;
      }
      localStorageHandler({
        key: "user",
        payload: {
          ...formData,
          todos: [],
          id: "rxn",
          token: "token",
        },
        action: "set",
      });
    }
    navigate("/");
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-96 h-96 flex flex-col justify-center items-center rounded-md shadow-2xl p-8 ">
        <h1 className="text-2xl font-bold mb-5 uppercase">
          {mode === "login" ? "Login" : "Register"}
        </h1>
        <form
          className="flex flex-col w-full gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          {mode === "register" && (
            <input
              type="text"
              placeholder="Name"
              className="input w-full h-10 mb-3 p-2 rounded-md "
              name="name"
              value={formData?.name || ""}
              onChange={(e) => handleChange(e)}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="input w-full h-10 mb-3 p-2 rounded-md"
            name="email"
            value={formData?.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input w-full h-10 mb-3 p-2 rounded-md"
            name="password"
            value={formData?.password || ""}
            onChange={(e) => handleChange(e)}
          />

          <button
            type="submit"
            className="w-full h-10 bg-pinkish hover:bg-pinkish-dark text-white rounded-xl"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>
        <button
          onClick={changeMode}
          className="mt-3 text-blueish-lighter  underline"
        >
          {mode === "login"
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
