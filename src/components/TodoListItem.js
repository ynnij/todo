import { useState, useRef, useEffect } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { BsFillPencilFill, BsCheckLg } from "react-icons/bs";
import { act } from "react-dom/test-utils";

const TodoListItem = ({ id, content, deleteTodo, todos, setTodos }) => {
  const [check, setCheck] = useState(false);
  const [isEditClick, setIsEditClick] = useState(false);
  const updateRef = useRef();
  //todo update
  const openEdit = () => {
    setIsEditClick(true);
  };

  const updateTodo = (updateId) => {
    if (updateRef.current.value == "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === updateId
          ? {
              ...todo,
              content: updateRef.current.value,
            }
          : todo
      )
    );
    setIsEditClick(false);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      updateTodo(id);
      setIsEditClick(false);
    }
  };

  const isDone = (e) => {
    setCheck(e.target.checked);
  };

  useEffect(() => {
    if (isEditClick) updateRef.current.focus();
  }, [isEditClick]);

  return (
    <div
      className="grid grid-cols-7 gap-3 shadow p-3 rounded-lg mb-4 items-center"
      id={id}
    >
      <input
        type="checkbox"
        onChange={isDone}
        className="h-5 w-5 border border-blue-gray-200 transition-all checked:bg-blue-200 "
      />
      {isEditClick ? (
        <input
          ref={updateRef}
          className="pl-3 col-span-5 rounded-lg border border-blue-gray-200 
        focus:border-2 focus:border-blue-500 focus:outline-0"
          defaultValue={content}
          onKeyDown={activeEnter}
        />
      ) : !check ? (
        <p className="col-span-4 text-start text-black">{content}</p>
      ) : (
        <p className="col-span-4 text-start line-through text-gray-200">
          {content}
        </p>
      )}
      {isEditClick ? (
        <button onClick={() => updateTodo(id)}>
          <BsCheckLg className="text-lg mx-auto text-gray-300 hover:text-blue-500" />
        </button>
      ) : (
        <div className="col-span-2 flex justify-around ">
          {!check ? (
            <button onClick={openEdit}>
              <BsFillPencilFill className="text-gray-300 hover:text-green-500" />
            </button>
          ) : (
            <button onClick={openEdit} disabled>
              <BsFillPencilFill className="text-gray-100" />
            </button>
          )}

          <button onClick={() => deleteTodo(id)}>
            <FaTrashCan className="text-gray-300 hover:text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
