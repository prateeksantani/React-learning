import React from 'react'
import Person from './Person'

function ListMap() {

  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill : 'Strip'
    },
    {
      id: 4,
      name: 'Peter',
      age: 25,
      skill: 'Climbing'
    }
  ]

  const personList = persons.map((person) => 
  <Person key={person.id} person={person}></Person>
  )
  return (
    <div>{personList}</div>
  )
}

export default ListMap