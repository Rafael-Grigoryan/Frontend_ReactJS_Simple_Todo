import { memo } from "react";

function Input({handleChange, value}) {
    return (
        <div>
            <label>
                <input type="text" onChange={handleChange} value={value}/>
            </label>
        </div>
    )
}

export default memo(Input)