import React from 'react'
import Input from 'components/Common/Input'
import './style.css'

const Home = () =>
  <div className="homeLayout__container">
    <h1 className="homeLayout__text">Search Github Users</h1>
    <div className="homeLayout__inputWrapper">
      <Input
        className="homeLayout__input"
        placeholder="Enter username"
      />
    </div>
  </div>

export default Home
