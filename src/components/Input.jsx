import { memo } from "react";

function Input({handleChange, value}) {
    console.log("re-remfer-input");

    return (
        <div>
            <label>
                <input type="text" onChange={handleChange} value={value}/>
            </label>
        </div>
    )
}

export default memo(Input)