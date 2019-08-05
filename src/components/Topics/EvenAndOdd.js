import React from 'react'

class EvenAndOdd extends React.Component {

    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

        // bindings
        this.changeInput = this.changeInput.bind(this)
        this.split = this.split.bind(this)
    }

    changeInput(event) {

        this.setState({
            userInput: event.target.value
        })
    }

    split(event) {

        let arr = this.state.userInput.split(',')
        let even = []
        let odd = []

        arr.forEach((num) => {
            if (num % 2) {
                odd.push(parseInt(num))
            }
            else {
                even.push(parseInt(num))
            }
        })

        console.dir(this.state)

        this.setState({
            evenArray: even,
            oddArray: odd
        })
    }

    render() {

        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>EvenAndOdd</h4>
                <input type="text" className="inputLine" onChange={ this.changeInput }/>
                <button className="confirmationButton" onClick={ this.split }>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd