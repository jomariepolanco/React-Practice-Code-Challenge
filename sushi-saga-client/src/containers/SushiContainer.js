import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state = {
    startIndex: 0,
    finishIndex: 4,
  }

  sushis = () => {
    return this.props.sushiArray.map(sushi => <Sushi key={sushi.id} moneyRemaining={this.props.moneyRemaining} makeMoney={this.props.makeMoney} handleEatenSushi={this.props.handleEatenSushi} sushi={sushi} />).slice(this.state.startIndex, this.state.finishIndex)
  }

  moreSushi = () => {
    this.setState({
      startIndex: this.state.startIndex + 4, 
      finishIndex: this.state.finishIndex + 4
    })
  }


  render(){
    return (
        <div className="belt">
          {this.sushis()}
          <MoreButton handleClick={this.moreSushi}/>
        </div>
    )

  }
}

export default SushiContainer