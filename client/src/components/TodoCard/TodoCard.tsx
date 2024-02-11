import React, { useRef, useState } from "react";
import { Todo, useMyContext } from "../../providers/ContextProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import { TbFishHook } from "react-icons/tb";
import { PiFishSimpleBold } from "react-icons/pi";
import { GiFishCooked, GiFishCorpse } from "react-icons/gi";

interface Props {
  todo: Todo;
}

const TodoCard: React.FC<Props> = ({ todo }) => {
  const { title, description, createdAt, completed } = todo;
  const { todos, setTodos } = useMyContext();
  const [task, setTask] = useState<string>(title);
  const [desc, setDesc] = useState<string>(description);

  const modalRef = useRef<HTMLDialogElement>(null);

  // Function to handle delete
  const handleDelete = () => {
    // Implement delete functionality here
    const updatedTodos = todos.filter((t) => t.id !== todo.id);

    setTodos(updatedTodos);
  };

  // Function to handle edit
  const handleEdit = () => {
    // Implement edit functionality here
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, title: task, description: desc } : t
    );
    setTodos(updatedTodos);
    modalRef.current?.close();
  };
  const handleCompleteChange = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, completed: !completed } : t
    );
    setTodos(updatedTodos);
  };

  return (
    <div className=" rounded-lg shadow-xl p-4 mb-4 relative neon">
      <h2 className="text-xl font-semibold mb-2 flex items-center text-blueish-dark">
        <span
          onClick={handleCompleteChange}
          className="tooltip bg-pinkish-dark rounded-full p-1  cursor-pointer mr-1"
          data-tip="Complete Task"
        >
          {completed ? (
            <GiFishCorpse className="mr-1 text-blueish-light " />
          ) : (
            <PiFishSimpleBold className="mr-1 text-blueish-light" />
          )}
        </span>

        {title}
      </h2>
      <p className=" mb-2">Description: {description}</p>
      <p className=" mb-2">
        Created At: {createdAt.toString().split("GMT")[0]}
      </p>
      <p className=" mb-2">Completed: {completed ? "Yes" : "No"}</p>
      <div className="flex justify-end">
        <button
          className="btn tooltip tooltip-bottom text-white rounded-full mr-2  "
          data-tip="Delete"
          onClick={handleDelete}
        >
          <MdDelete />
        </button>
        <button
          className="btn tooltip tooltip-bottom text-white rounded-full mr-2"
          data-tip="Edit"
          onClick={() => modalRef?.current?.showModal()}
        >
          <MdEdit className="tooltip" />
        </button>
      </div>
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
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className="btn mx-2 text-lg" onClick={handleEdit}>
              Hook <TbFishHook className="text-2xl text-blueish" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TodoCard;
