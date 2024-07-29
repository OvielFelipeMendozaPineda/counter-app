import React, { useState } from 'react'
import PropTypes, { func } from 'prop-types'

export default function CounterApp({ value }) {
  
  const [counter, setCounter] = useState(value)

  function handleClick() {
    console.log("click");
    setCounter(( c ) => c + 1)
  
    setCounter( counter + 1 )
  }


  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>
      <button onClick={ handleClick }>
        +1
      </button>
    </div>
  )
}



CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 5
}
