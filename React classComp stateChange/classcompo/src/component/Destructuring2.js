import React from 'react'

function Destructuring2(props) {
  const {name, heroName} = props
  return (
    <div>
      <h1>{name} is {heroName}</h1>
    </div>
  )
}

export default Destructuring2
