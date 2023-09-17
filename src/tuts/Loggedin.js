import React from 'react'

function Loggedin({login}) {
  return (
    <div>

    {login && <p>no way!!</p>}
    
    </div>
  )
}

export default Loggedin