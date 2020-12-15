import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: [],
    startMoney: 100
  }

  componentDidMount(){
    fetch(API).then(r => r.json()).then(sushis => this.setState({sushis: sushis}))
  }

  handleEatenSushi = (sushi) => {
      if (!this.state.eatenSushi.find(sushiEl => sushiEl.id === sushi.id)){
        this.setState({eatenSushi: [...this.state.eatenSushi, sushi]})
      } else {
        this.setState({eatenSushi: this.state.eatenSushi})
    }
  }

  makeMoney = (price) => {
      this.setState({startMoney: this.state.startMoney - price})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer moneyRemaining={this.state.startMoney} makeMoney={this.makeMoney} handleEatenSushi={this.handleEatenSushi} sushiArray={this.state.sushis}/>
        <Table moneyRemaining={this.state.startMoney} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;