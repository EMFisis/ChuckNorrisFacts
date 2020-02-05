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
  async componentDidMount(){
    try {
      setInterval(async () => {
        const data = await fetch('https://api.chucknorris.io/jokes/random')
        let responseData = await data.json()
        let chuckFact = responseData.value
        this.setState({ chuckFact })
        console.log('this is the chuckFact from state', this.state.chuckFact)
      }, 1500)
    } catch(error) {
      console.log(error)
    }
  }

  render(){
    // let factJSX
    //   this.state.chuckFact ? factJSX = (<div>{ this.state.chuckFact }</div>) : factJSX = (<div>'Loading...'</div>)
    // <div>{ factJSX }</div>
    return(
      <div>
        <h1>Your Chuck Norris Random Fact is...</h1>
        <h4>{ this.state.chuckFact }</h4>
      </div>
    )
  }
}
