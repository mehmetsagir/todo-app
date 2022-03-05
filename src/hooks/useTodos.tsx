import { createContext, useContext, useState } from 'react';
import uuid from 'react-native-uuid';

export type TodoProps = {
  id: string;
  title: string;
  completed: boolean;
  createdDate: string;
};

type ContextType = {
  todos: TodoProps[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
  completedToggleTodo: (id: string) => void;
};

const TodosContext = createContext<ContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  completedToggleTodo: () => {},
});

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const editTodo = (id: string, title: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    setTodos([
      {
        id: uuid.v4().toString(),
        title: text,
        completed: false,
        createdDate: new Date().toISOString(),
      },
      ...todos,
    ]);
  };

  const removeTodo = (id: string) => {
    if (!id) return;

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const completedToggleTodo = (id: string) => {
    if (!id) return;

    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        editTodo,
        completedToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
