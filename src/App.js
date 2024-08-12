import PropTypes from 'prop-types'
import React, { Component } from 'react'
import StarPattern from './components/ProblemNo76'
import Cart from './components/Cart'


export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <div>
     
        {<Cart/>}
        
      </div>
    </>
    )
  }

}


export default App