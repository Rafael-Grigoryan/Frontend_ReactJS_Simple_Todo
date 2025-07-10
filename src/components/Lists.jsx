export function Lists({ todos, remove }) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return <div>
                        {todo.text}
                        {/* <button onClick={()=>remove(todo.id)}>X</button> */}
                        <input type="checkbox"onClick={()=>remove(todo.id)} />
                    </div>
                })
            }
        </div>
    )
}