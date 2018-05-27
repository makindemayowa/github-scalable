import React from 'react'
import UserSearch from 'containers/User/Search'
import UserContainer from 'containers/User'
import WarningBarLayout from 'layouts/Common/WarningBar'
import './style.css'

const Home = () =>
  <div className="homeLayout__container">
    <WarningBarLayout />
    <UserSearch />
    <UserContainer />
  </div>

export default Home
