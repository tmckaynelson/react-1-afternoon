import React from 'react'

class Sum extends React.Component {

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    onChange1 = (event) => {

        this.setState({
            number1: event.target.value
        })
    }

    onChange2 = (event) => {

        this.setState({
            number2: event.target.value
        })
    }

    makeSum = () => {

        this.setState({
            sum: parseInt(this.state.number1) + parseInt(this.state.number2)
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" onChange={ this.onChange1 }/>
                <input type="text" className="inputLine" onChange={ this.onChange2 }/>
                <button className="confirmationButton" onClick={ this.makeSum }>Add</button>
                <span className="resultsBox">Sum: { JSON.stringify(this.state.sum) }</span>
            </div>
        )
    }
}

export default Sum