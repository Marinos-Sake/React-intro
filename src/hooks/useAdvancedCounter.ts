import {useState} from "react";


type CounterState = {
    count: number;
    lastAction: string;
    timer: string;
}

export const useAdvancedCounter = () => {
    const [state, setState] = useState<CounterState>({
        count:0,
        lastAction: "",
        timer: ""
    });

    const getCurrentTime  = () => new Date().toLocaleTimeString();

    const increase = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            timer: getCurrentTime()
        })
    }

    const decrease = () => {
        if (state.count > 0 ) {
            setState({
                count: state.count - 1,
                lastAction: "Decrease",
                timer: getCurrentTime()
            })

        }

    }

    const reset = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            timer: getCurrentTime()
        })
    }

    return {
        count: state.count,
        lastAction: state.lastAction,
        timer: state.timer,
        increase,
        decrease,
        reset,
    }
}
