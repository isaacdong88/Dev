import { createContext, useState } from "react";


const CountContext = createContext()


export const Provider = ({children}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count -1)
    }

    const obj = {
        count: count,
        increment: increment,
        decrement: decrement
    }

    return (
        <CountContext.Provider value={obj}>
            {children}
        </CountContext.Provider>
    )

}

export default CountContext