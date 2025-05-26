import CounterButton from "./CounterButton.tsx";
import {useState} from "react";


type CounterState = {
    count: number;
    lastAction: string;
    timer: string;
}


const CounterWithMoreStates = () => {
    const [state, setState] = useState<CounterState>({
        count:0,
        lastAction: "",
        timer: ""
    });

    const getCurrentTime = () => new Date().toLocaleTimeString()

    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            timer: getCurrentTime()
        })
    }

    const decreaseCount = () => {

        if (state.count > 0) {

            setState({
                count: state.count -1,
                lastAction: "Decrease",
                timer: getCurrentTime()
            })

        }

    }

    const resetCount = () => {

        setState({
            count: 0,
            lastAction: "Reset",
            timer: getCurrentTime()
        })

    }


    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {state.count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label="Increase" />
                    <CounterButton onClick={decreaseCount} disabled={state.count === 0} label="Decrease" />
                    <CounterButton onClick={resetCount} disabled={state.count === 0} label="Reset" addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="text-center pt-8">Last change: {state.lastAction || "-"} at <strong>{state.timer || "-"}</strong> </p>
        </>
    )
}

export default CounterWithMoreStates;