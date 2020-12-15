import React, { Fragment } from 'react'

class Sushi extends React.Component{


  handleClick = () => {
    if (this.props.moneyRemaining >= this.props.sushi.price){
      this.props.handleEatenSushi(this.props.sushi)
      this.props.makeMoney(this.props.sushi.price)
    }
  }

  render(){
    console.log(this.props.sushi)
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleClick}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.props.sushi.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi