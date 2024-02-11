import React, { useRef, useState } from "react";
import { TbFishHook } from "react-icons/tb";
import Todos from "../Todos/Todos";

const Home = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <div className="w-screen flex flex-col justify-center items-center p-4">
      <button
        className="btn w-fit text-xl text-blueish-lightest font-bold"
        onClick={() => modalRef?.current?.showModal()}
      >
        <TbFishHook className="text-2xl" />
        <span className="prompt">Pick a Fish</span>
      </button>
      <Todos />
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="font-bold text-xl text-center uppercase prompt">
            Hook a task
          </h2>
          <div className="flex flex-col gap-4 items-center justify-center my-4 w-full  p-4">
            <input
              type="text"
              className="input prompt w-full text-lg"
              placeholder="Enter a fishy task..."
              autoFocus
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <input
              type="Description"
              className="input prompt w-full text-lg"
              placeholder="Enter a fishy description"
              autoFocus
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn mx-2 text-lg">
              Hook <TbFishHook className="text-2xl text-blueish" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
