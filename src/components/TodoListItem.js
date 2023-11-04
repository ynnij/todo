import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
const TodoListItem = () => {
  const [check, setCheck] = useState(false);

  const isDone = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="grid grid-cols-6 gap-3 shadow p-3 rounded-lg mb-4">
      <input
        type="checkbox"
        onChange={isDone}
        className="h-5 w-5 appearance-none rounded-full border border-blue-gray-200 transition-all checked:bg-blue-200 "
      />
      {!check ? (
        <p className="col-span-4 text-start text-black">할 일 List1</p>
      ) : (
        <p className="col-span-4 text-start line-through text-gray-200">
          할 일 List1
        </p>
      )}
      <button className="flex justify-center items-center">
        <FaTrashCan className="text-gray-100 hover:text-red-500" />
      </button>
    </div>
  );
};

export default TodoListItem;
