import { createContext, useState } from "react";

const CounterContext = createContext()

//To manipulate context, you need to create a new Provider

export const Provider = ({children}) => {
    //Create a variable state, everytime you change state(data) it reloads
    const [counter, setCounter] = useState(0)

    //Create function to increment and decrement
    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    //Create an object to share with the rest of the app
    const obj = {
        counter: counter,
        increment: increment,
        decrement: decrement
    }

    //Return the provider
    return (
        <CounterContext.Provider value={obj}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext