export function Lists({ todos, remove, startEditing, stopEditing }) {
    return (
      <div>
        {
          todos.map((todo) => (
            <div key={todo.id}>
              {
                todo.isEditing ? (
                  <input
                    type="text"
                    defaultValue={todo.text}
                    onBlur={(e) => stopEditing(todo.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        stopEditing(todo.id, e.target.value)
                      }
                    }}
                  />
                ) : (
                  <span onDoubleClick={() => startEditing(todo.id)}>{todo.text}</span>
                )
              }
              <button onClick={() => remove(todo.id)}>X</button>
            </div>
          ))
        }
      </div>
    )
  }