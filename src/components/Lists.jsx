import { List } from "./List";

export function Lists({ todos, remove}) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return <div>
                       <List todo={todo} remove={remove} />
                    </div>
                })
            }
        </div>
    )
}