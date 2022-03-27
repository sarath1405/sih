import React from 'react'

const User = ({id, name, email, phone}) => {
  return (
    <div className='details'>
        Unique Id : <span>{id}</span> <br />
        Name : <span>{name}</span> <br />
        Email : <span>{email}</span> <br />
        Phone : <span>{phone}</span> <br />
    </div>
  )
}

export default User