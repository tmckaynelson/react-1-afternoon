import React from 'react'

class FilterString extends React.Component {

    constructor() {
        super() 

        this.state = {
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            input: '',
            filteredArray: []
        }

        // bindings
        this.changeInput = this.changeInput.bind(this)
        this.filter = this.filter.bind(this)
    }

    changeInput(event) {

        this.setState({
            input: event.target.value
        })
    }

    filter() {

        let filtered = this.state.unFilteredArray.filter((element) => {
            return element.includes(this.state.input)
        })

        this.setState({
            filteredArray: filtered
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>FilterString</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray) }</span>
                <input type="text" className="inputLine" onChange={ this.changeInput }/>
                <button className="confirmationButton" onClick={ this.filter }>Filter</button>
                <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterString