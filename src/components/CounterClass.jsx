import { Component } from "react";

export default class CounterClass extends Component {

    state = {
        counter: 0,
    }

    render() {
        const { counter } = this.state;

        const increment = _ => {
            this.setState({
                counter: counter + 1
            })
        }

        return (
            <>
                <h2>{counter}</h2>
                <button type="button" onClick={increment}>
                    Increment
                </button>
            </>
        );
    }
}