import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const todoItems = todos.map((todo) => (
    <TodoListItem id={todo.id} content={todo.content} key={todo.id} />
  ));

  return <div className="mt-8 p-3 h-[580px] overflow-auto">{todoItems}</div>;
};

export default TodoList;
