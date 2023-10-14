import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todos} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
