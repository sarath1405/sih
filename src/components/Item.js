import React from 'react'

const Item = ({filter, click}) => {
  return (
    <div className='items'>
        {filter.map((item, index) => {
            return <button value={item.unqid} key={index} onClick={click}>{item.unqid}</button>
        })}
    </div>
  )
}

export default Item