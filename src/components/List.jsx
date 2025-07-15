export function List({todo, remove}) {

  return (
    <div>
      {todo.text}
      <button onClick={() => remove(todo.id)}>X</button>
    </div>
  );
}





