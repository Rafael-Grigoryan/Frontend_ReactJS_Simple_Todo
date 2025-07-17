import { useState, useEffect, useRef } from "react";

export function Counter() {
    const [count, setCount] = useState(10);
    const ref = useRef(null);
    useEffect(() => {
        ref.current = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(ref.current)
        }
    }, [])

    const handleClickStop = () => {
        clearInterval(ref.current)
    }

    const handleClickStart = () => {
         clearInterval(ref.current)
        ref.current = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={handleClickStop}>Stop</button>
            <button onClick={handleClickStart}>Start</button>
        </div>
    )
}