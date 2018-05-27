import React from 'react'
import UserSearch from 'containers/UserSearch'
import WarningBarLayout from 'layouts/Common/WarningBar'
import './style.css'

const Home = () =>
  <div className="homeLayout__container">
    <WarningBarLayout />
    <UserSearch />
  </div>

export default Home
