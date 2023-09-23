import React from 'react';
import axios from 'axios';


//axios call
const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then( res => res)
        .catch( err => console.log(`noooo`))
}

class App extends React.Component {

    //constructor function always runs first
    //setting state to set a breed, and to render doggos
    constructor() {
        console.log(`constructor run`)
        super();
        this.state = {
            doggos: [],
            breed: 'husky' 
        }
    }

    //state to actually set the breed to what is held in state,
    // and then render each result from the api
    componentDidMount() {
        console.log(`component did mount`)
        fetchDogs(this.state.breed)
            .then(res => {
                this.setState({doggos: res.data.message})
            })
    }

    //componentDidMount and componentDidUpdate are built in to the react structure
    //will run after first render. constructor will run then the componentDidMount then render
    //then this would run and then rerender
    //will take in two parapmeters, the previous props and previous state
    componentDidUpdate(prevProps, prevState) {
        console.log('component did update')
        console.log(prevState)

    }

    //searchDogs is a  method
    //will be passed to the searchform component and will render dogs
    searchDogs = dogName => {
        console.log(`search dogs`)
        fetchDogs(dogName).then( res => {
            this.setState({doggos: res.data.message, breed: dogName})
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
