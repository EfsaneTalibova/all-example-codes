import React from 'react'

const MenuItem = ({img,title,price,desc}) => {
  return (
    <article className='menu-item'>
        <img src={img} alt={title} className='img' />
    </article>
  )
}

export default MenuItem