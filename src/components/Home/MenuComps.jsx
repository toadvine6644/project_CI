import React from 'react'
import '../CSS/MenuComps.css'

function MenuComps(props) {
  return (
    <div className='layout'>
        <a className='comps' href={props.link}>{props.name}</a>
    </div>
  )
}

export default MenuComps