import React from 'react'

const ErrorBounddary = ({heroname}) => {
  if(heroname === 'Joker'){
    throw new Error('Not a heroname')
  }
  return (
    <div>
      <h2>{heroname}</h2>
    </div>
  )
}

export default ErrorBounddary
