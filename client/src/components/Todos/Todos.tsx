import React, { useEffect, useState } from "react";
import { useMyContext } from "../../providers/ContextProvider";
import TodoCard from "../TodoCard/TodoCard";
import { GiFishCorpse } from "react-icons/gi";
import { PiFishSimpleBold } from "react-icons/pi";
import FishLoader from "../FishLoader/FishLoader";

const Todos = () => {
  const { todos } = useMyContext();
  const [showCompleted, setShowCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to toggle showing completed tasks
  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  // Filter todos based on showCompleted state
  const filteredTodos = showCompleted
    ? todos?.filter((todo) => todo.completed)
    : todos?.filter((todo) => !todo.completed);

  if (loading) {
    return <FishLoader />;
  }

  return (
    <div className="w-full flex flex-col mt-4">
      <div className="w-[90%] m-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Your Fishes</h1>
        <button className="btn sm:text-sm md:text-md" onClick={toggleCompleted}>
          {!showCompleted ? (
            <GiFishCorpse className="text-lg" />
          ) : (
            <PiFishSimpleBold className="text-lg" />
          )}

          <span
            className="tooltip"
            data-tip={`${!showCompleted ? "Completed" : "Uncompleted"} Tasks`}
          >
            {showCompleted ? "Raw" : "Baked"} Fishes
          </span>
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-8 py-4 ">
        {filteredTodos?.map((todo) => (
          <TodoCard todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
