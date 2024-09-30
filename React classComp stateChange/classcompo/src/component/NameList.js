import React from 'react'

function NameList() {
  const names = ['Bruce','Clark','Diana','Peter','Bruce'];
  const nameList =  names.map((name,index) => <h2 key={index}>{name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default NameList
