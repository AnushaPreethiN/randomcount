// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 2)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const text = count < 100 ? count : this.onIncrement(count - 2)
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count-heading">Random Number</h1>
          <p className="note">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="count-type">{text}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
