import React from 'react';
import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then( res => {res})
        .catch( err => {console.log(err)})
}

class App extends React.Component {
    constructor() {
        console.log(`constructor run`)
        super();
        this.state = {
            doggos: [],
            breed: 'husky' 
        }
        console.log(fetchDogs('husky'))
    }



    render() {
        console.log(`render function run`)
        return (
              
                <h1>App</h1>
                   
        )
    
    }
}

export default App
