import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchDogs(this.state.inputValue)
        this.setState({inputValue: ''})
    }


    render() {
        return (
            <div>Form
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" placeholder="breed" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})} /> */}
                    <input type="text" placeholder="breed" onChange={this.handleChange}value={this.state.inputValue} />
                    <button onClick={this.props.searchDogs(this.state.inputValue)}>Search Dogs</button>
                </form>
            </div>
        )
    }
}

export default SearchForm