import React from 'react'
import data from './MenuData'
import MenuComps from './MenuComps'
import '../CSS/HomeMenu.css'

function HomeMenu() {
  return (
    <div className='leftMenu'>
      {
        data.map((item, index) => {
          return(
            <MenuComps name={item.name} link={item.link}></MenuComps>
          )
        })
      }
    </div>
  )
}

export default HomeMenu