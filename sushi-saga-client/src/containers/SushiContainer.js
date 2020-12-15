import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state = {
    startIndex: 0,
    finishIndex: 4,
  }

  sushis = () => {
    return this.props.sushiArray.map(sushi => <Sushi key={sushi.id} sushi={sushi} />)
  }

  moreSushi = () => {
    this.setState({startIndex: this.state.startIndex + 4, finishIndex: this.state.finishIndex + 4})
  }

  render(){
    console.log(this.state.startIndex, this.state.finishIndex)
    return (
        <div className="belt">
          {this.sushis().slice(this.state.startIndex, this.state.finishIndex)}
          <MoreButton handleClick={this.moreSushi}/>
        </div>
    )

  }
}

export default SushiContainer