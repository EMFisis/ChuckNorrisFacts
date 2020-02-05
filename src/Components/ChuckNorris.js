import React, {Component} from 'react'
// import axios from 'axios'

// Minimal class component that
// uses constructor to initialize `state`
export default class ChuckNorris extends Component {
  constructor() {
    super()
    this.state = {
      chuckFact: null
    }
  }

  // When the Chuck Norris component is rendered
  // Whatever is inside this component will run
  componentDidMount(){


    fetch('https://api.chucknorris.io/jokes/random')
      .then(data => data.json())
      .then(data => {
        let chuckFact = data.value
        this.setState({ chuckFact:chuckFact })
        // console.log('chuckFact is ', chuckFact)
      })
      .catch(err => {
        console.error(err)
      })
  }

  render(){
    let facts
    this.state.chuckFact ? facts=(<div>{ this.state.chuckFact }</div>) : facts =(
    <div>Loading...</div>)

    return(
      <div>
        <h1>Your Chuck Norris Random Fact is...</h1>
        <div>{facts}</div>
      </div>
    )
  }
}
