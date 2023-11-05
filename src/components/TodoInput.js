const TodoInput = ({ addTodo, inputRef, onKeyPress }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <input
        ref={inputRef}
        className="pl-3 col-span-4 rounded-lg border border-blue-gray-200 
        focus:border-2 focus:border-blue-500 focus:outline-0"
        placeholder="오늘의 할 일은 무엇인가요?"
        onKeyDown={onKeyPress}
      />

      <button
        onClick={addTodo}
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
