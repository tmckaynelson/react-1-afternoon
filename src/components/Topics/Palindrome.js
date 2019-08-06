import React from 'react'

class Palindrome extends React.Component {

    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: false
        }


        // bindings
        this.changeInput = this.changeInput.bind(this)
        this.checkPalindrome = this.checkPalindrome.bind(this)
    }

    changeInput(event) {

        this.setState({
            userInput: event.target.value
        })
    }

    checkPalindrome() {

        let reversed = this.state.userInput.split('').reverse().join('')

        let palin = false

        if (this.state.userInput === reversed) {
            palin = true
        }
        else {
            palin = false
        }

        this.setState({
            palindrome: palin
        })
    }

    render() {
        return (
            <div className="puzzleBox filterString">
                <h4>Palindrome</h4>
                <input type="text" className=" inputLine" onChange={ this.changeInput }/>
                <button className="confirmationButton" onClick={ this.checkPalindrome }>Check</button>
                <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome) }</span>
            </div>
        )
    }
}

export default Palindrome