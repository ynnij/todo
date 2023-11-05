import { useEffect, useState, useRef } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoTemplate = () => {
  const inputRef = useRef(); //inputRef 변수
  const idRef = useRef(1); //todo id를 위한 Ref 변수
  const [todos, setTodos] = useState([]); //todo 항목 상태변수

  //todo create
  const addTodo = () => {
    if (inputRef.current.value === "") return;
    const newItem = {
      id: idRef.current,
      content: inputRef.current.value,
    };

    setTodos(todos.concat(newItem));

    idRef.current += 1;
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  const activeEnter = (e) => {
    if (e.key === "Enter") addTodo();
  };

  //todo delete
  const deleteTodo = (deleteId) => {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-[512px] h-[768px] p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        TODO
      </h5>
      <div>
        <TodoInput
          addTodo={addTodo}
          inputRef={inputRef}
          onKeyPress={activeEnter}
        />
        {todos && (
          <TodoList todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} />
        )}
      </div>
    </div>
  );
};

export default TodoTemplate;
