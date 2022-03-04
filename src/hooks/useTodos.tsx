import { createContext, useContext, useState } from 'react';
import uuid from 'react-native-uuid';

import { TodoProps } from '../components/TodoList';

type ContextType = {
  todos: TodoProps[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  completedToggleTodo: (id: string) => void;
};

const TodosContext = createContext<ContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  completedToggleTodo: () => {},
});

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (text: string) => {
    if (!text) return;

    setTodos([
      ...todos,
      {
        id: uuid.v4().toString(),
        text,
        completed: false,
        createdDate: new Date().toISOString(),
      },
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
        completedToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
