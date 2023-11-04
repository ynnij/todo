import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

const TodoListItem = ({ id, content, deleteTodo }) => {
  const [check, setCheck] = useState(false);

  const isDone = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="grid grid-cols-6 gap-3 shadow p-3 rounded-lg mb-4" id={id}>
      <input
        type="checkbox"
        onChange={isDone}
        className="h-5 w-5 appearance-none rounded-full border border-blue-gray-200 transition-all checked:bg-blue-200 "
      />
      {!check ? (
        <p className="col-span-4 text-start text-black">{content}</p>
      ) : (
        <p className="col-span-4 text-start line-through text-gray-200">
          {content}
        </p>
      )}
      <button
        className="flex justify-center items-center"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <FaTrashCan className="text-gray-100 hover:text-red-500" />
      </button>
    </div>
  );
};

export default TodoListItem;
