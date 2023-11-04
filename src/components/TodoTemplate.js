import { useEffect, useState, useRef } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoTemplate = () => {
  //inputRef 변수
  const inputRef = useRef();

  //todo id를 위한 Ref 변수
  const idRef = useRef(1);

  //todo 항목 상태변수
  const [todos, setTodo] = useState([]);

  //todo create
  const addTodo = () => {
    const newItem = {
      id: idRef.current,
      content: inputRef.current.value,
    };

    setTodo(todos.concat(newItem));

    idRef.current += 1;
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  //todo delete
  const deleteTodo = (deleteId) => {
    setTodo(todos.filter((todo) => todo.id !== deleteId));
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
        <TodoInput addTodo={addTodo} inputRef={inputRef} />
        {todos && <TodoList todos={todos} deleteTodo={deleteTodo} />}
      </div>
    </div>
  );
};

export default TodoTemplate;
