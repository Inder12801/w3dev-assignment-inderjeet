import { createContext, useContext, useState } from "react";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  token: string;
  todos: Todo[];
}

interface MyContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  todos: Todo[] | null;
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>;
}

const MyContext = createContext<MyContextType>({
  user: null,
  setUser: () => {},
  todos: [],
  setTodos: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<Todo[] | null>([]);
  return (
    <MyContext.Provider value={{ user, setUser, todos, setTodos }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;

export const useMyContext = () => {
  return useContext(MyContext);
};
