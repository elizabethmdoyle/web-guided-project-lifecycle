import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    // handleChange = (e) => {
    //     e.preventDefault()
    //     this.setState({inputValue: e.target.value})
    // }


    render() {
        return (
            <div>Form
                <form>
                    <input type="text" placeholder="breed" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} />
                    <button onClick={this.props.searchDogs(this.state.inputValue)}>Search Dogs</button>
                </form>
            </div>
        )
    }
}

export default SearchForm