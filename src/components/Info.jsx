import React from 'react'
import meImage from '../images/me.jpeg'
import 'boxicons'

function Info() {
  return (
    <div className='info-container'>
      <div className='profile'>
      <img src={meImage} alt="" className='image' />
      <h1 className='name'>Deivy Patiño</h1>
      <h3>Frotend developer</h3>
      </div>
      <div className='social-media'>

      <a href="mailto:deivypr28@gmail.com" className="button email">
  <box-icon name='envelope' type='solid' color='#000000'></box-icon>
  Email
</a>

<a href="https://www.linkedin.com/in/deivy-programmer/" className="button linkedin">
  <box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon>
  Linkedin
</a>

      </div>
    </div>
  )
}

export default Info