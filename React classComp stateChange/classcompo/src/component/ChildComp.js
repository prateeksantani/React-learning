import React from 'react'

function ChildComp({children}) {     //{props}
  return (
    <div>
       <div className="card">
      <div className="card-content">
      <h2>Child Component</h2>
        {children}                   {/* props.children */}
      </div>
    </div>
    </div>
  )
}

export default ChildComp
