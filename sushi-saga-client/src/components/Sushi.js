import React, { Fragment } from 'react'

class Sushi extends React.Component{

  state = {
    beenClicked: false
  }

  handleClick = () => {
    this.setState({beenClicked: true})
    this.props.handleEatenSushi(this.props.sushi)
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleClick}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.beenClicked ?
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