import { Component } from 'react'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }

    this.changeLikes = this.changeLikes.bind(this);
  }

  changeLikes = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
      return (
          <button onClick={this.changeLikes}>{this.state.count} likes</button>

      )
  }
  }


export default App;
