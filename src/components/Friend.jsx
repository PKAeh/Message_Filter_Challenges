import React, { useState } from 'react'

//mock data
import userData from './userData'

const Friend = () => {
  const [showData, setShowData] = useState(userData)

  return (
    <div className="container">
      <ul>
        {showData.map((user) => {
          return <li key={user.id}>{`${user.first_name} ${user.last_name}`}</li>
        })}
      </ul>
    </div>
  )
}

export default Friend
