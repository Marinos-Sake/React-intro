import {useState} from "react";
import CounterButton from "./CounterButton.tsx";


const CounterWithMoreStates =  () => {
    const [count,setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [timer, setTimer] = useState("");
    const getCurrentTime = () => new Date().toLocaleTimeString()

    const increaseCount = () => {
        setCount(count + 1)
        setLastAction("Increase");
        setTimer(getCurrentTime())
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        setLastAction("Decrease");
        setTimer(getCurrentTime())
    }

    const resetCount = () => {
        setCount(0)
        setLastAction("Reset");
        setTimer(getCurrentTime())
    }

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label="Increase" />
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label="Decrease" />
                    <CounterButton onClick={resetCount} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="text-center pt-8">Last change: {lastAction || "-"} at <strong>{timer || "-"}</strong> </p>
        </>


    )
}

export default CounterWithMoreStates;