import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: []
  }

  componentDidMount(){
    fetch(API).then(r => r.json()).then(sushis => this.setState({sushis: sushis}))
  }

  handleEatenSushi = (sushi) => {
    this.setState({eatenSushi: [...this.state.eatenSushi, sushi]})
  }

  render() {
    console.log(this.state.eatenSushi)
    return (
      <div className="app">
        <SushiContainer handleEatenSushi={this.handleEatenSushi} sushiArray={this.state.sushis}/>
        <Table eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;