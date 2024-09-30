import React from 'react'

function Person({person}) {
  return (
    <div>
    <h4>I am {person.name} of age {person.age} with skill of{person.skill}</h4>
    </div>
  )
}

export default Person