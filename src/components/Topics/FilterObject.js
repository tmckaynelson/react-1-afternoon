import React from 'react'

class FilterObject extends React.Component {

    constructor() {
        super()

        this.state = {
            unFilterdArray: [
                { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
                { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
                { "name": "Carly Armstrong", "title": "CEO" }
            ],
            input: '',
            filteredArray: []
        }

        // bindings
        this.changeInput = this.changeInput.bind(this)
        this.filter = this.filter.bind(this)
    }

    changeInput(event) {

        console.log('change')

        this.setState({
            input: event.target.value
        })
    }

    filter() {

        console.log('filter')

        let filtered = this.state.unFilterdArray.filter((element) => {
            return element.hasOwnProperty(this.state.input)
        })

        this.setState({
            filteredArray: filtered
        })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>FilterObject</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilterdArray) }</span>
                <input type="text" className="inputLine" onChange={ this.changeInput }/>
                <button className="confirmationButton" onClick={ this.filter }>Filter</button>
                <span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredArray) }</span>
            </div>  
        )
    }
}

export default FilterObject