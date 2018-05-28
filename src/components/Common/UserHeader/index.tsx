import React from 'react'
import './style.css'

interface HeaderPropsInterface {
  items: Array<any>
}

const Header = ({ items }: HeaderPropsInterface) => (
  <div className="header__wrapper">
    {items.map(item => <span key={item}>{item}</span>)}
  </div>
)

export default Header
