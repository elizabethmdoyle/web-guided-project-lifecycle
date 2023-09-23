import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }


    render() {
        return (
            <div>Form
                <form>
                    <input type="text" placeholder="breed" value={this.state.inputValue} />
                    <button>Search Dogs</button>
                </form>
            </div>
        )
    }
}

export default SearchForm