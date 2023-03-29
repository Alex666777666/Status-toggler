import React, { Component } from 'react'

class Toggler extends Component {
  constructor(props) {
    super(props)
    this.state = { toggleState: 'Off' }
  }

  ToggleState = () => {
    const currentState = this.state.toggleState === 'Off' ? 'On' : 'off'
    this.setState({ toggleState: currentState })
  }

  render() {
    return (
      <>
        <button onClick={this.ToggleState} className='toggler'>
          {this.state.toggleState}
        </button>
      </>
    )
  }
}

export default Toggler
