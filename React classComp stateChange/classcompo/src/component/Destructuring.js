import React from 'react'

const heading = {
  fontSize: '32px',
  color: 'lightblue',
  
}

const Destructuring = ({name,heroName,name2,heroName2}) => {
  return (
    <div>
      <h1 style={heading}>Dark knight is {name} aka {heroName}</h1>
      <h1>KriptonSon is {name2} aka {heroName2}</h1>
    </div>
  )
}

export default Destructuring
