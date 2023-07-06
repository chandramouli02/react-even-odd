import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  //  to get random Number and setState..
  increaseNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    //  console.log(count)
    //  conditional rendering
    const typeOfCount = () => {
      if (count % 2 === 0) {
        console.log('even')
        return <p className="count-type">Count is Even</p>
      }
      return <p className="count-type">Count is Odd</p>
    }

    return (
      <div className="main-container">
        <h1>Count {count}</h1>
        {typeOfCount()}
        <button type="button" onClick={this.increaseNumber}>
          Increment
        </button>
        <p>*increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
