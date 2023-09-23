import React from 'react';
import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then( res => res)
        .catch( err => console.log(`noooo`))
}

class App extends React.Component {
    constructor() {
        console.log(`constructor run`)
        super();
        this.state = {
            doggos: [],
            breed: 'husky' 
        }
    }

    componentDidMount() {
        console.log(`component did mount`)
        fetchDogs(this.state.breed)
            .then(res => {
                this.setState({doggos: res.data.message})
            })
    }

    render() {
        console.log(`render function run`);
        return (

                 <div>
                {this.state.doggos.map((dog, index) => (
                    <img width='200' src={dog} key={index} alt={dog} />
                ))}
                  </div>
                   
        )
    
    }
}

export default App
