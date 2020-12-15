import React from 'react'

class MoneyForm extends React.Component{

    state = {
        money: 0
    }

    handleChange = (e) => {
        this.setState({money: parseInt(e.target.value)})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateMoney(this.state.money)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="number" placeholder="add to your wallet" value={this.state.money} onChange={this.handleChange}/>
                <button>Add to Wallet</button>
            </form>
            )
    }
}

export default MoneyForm