// import { useState, useEffect, useRef } from "react";

// export function CounterTimeout() {
//     const [count, setCount] = useState(10);
//     const timeoutRef = useRef(null);
//     const isRunningRef = useRef(true);

//     const tick = () => {
//         timeoutRef.current = setTimeout(() => {
//             setCount(prev => prev + 1);
//             if (isRunningRef.current) {
//                 tick();
//             }
//         }, 1000);
//     };

//     useEffect(() => {
//         tick();

//         return () => {
//             clearTimeout(timeoutRef.current); 
//             isRunningRef.current = false;
//         };
//     }, []);

//     const handleClickStop = () => {
//         isRunningRef.current = false;
//         clearTimeout(timeoutRef.current);
//     };

//     const handleClickStart = () => {
//         if (!isRunningRef.current) {
//             isRunningRef.current = true;
//             tick(); 
//         }
//     };

//     return (
//         <div className="counter">
//             <h1>{count}</h1>
//             <button onClick={handleClickStop}>Stop</button>
//             <button onClick={handleClickStart}>Start</button>
//         </div>
//     );
// }
