import { List } from "./List";

export function Lists({ todos, remove }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <List todo={todo} remove={remove} subText={todo.subText} />
        </div>
      ))}
    </div>
  );
}
