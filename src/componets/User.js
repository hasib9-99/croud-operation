import React from 'react'

const User = ({id, email,name}) => {
  return (
    <div>
      <span>{name}</span>
      <span>{email}</span>
      <span>{id}</span>
    </div>
  )
}

export default User