import { User } from "../providers/ContextProvider";

interface OptionsType {
  key: string;
  payload: User;
  action: string;
}

const useLocalStorage = () => {
  return (options: OptionsType) => {
    const { key, payload, action } = options;
    if (action === "set") {
      localStorage.setItem(key, JSON.stringify(payload));
      return;
    }
    if (action === "get") {
      return JSON.parse(localStorage.getItem(key) || "{}");
    }
    if (action === "remove") {
      localStorage.removeItem(key);
    }
  };
};

export default useLocalStorage;
