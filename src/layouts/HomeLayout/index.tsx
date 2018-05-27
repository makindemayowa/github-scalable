import React from 'react'
import UserSearch from 'containers/UserSearch'
import DashboardContainer from 'containers/Dashboard'
import WarningBarLayout from 'layouts/Common/WarningBar'
import './style.css'

const Home = () =>
  <div className="homeLayout__container">
    <WarningBarLayout />
    <UserSearch />
    <DashboardContainer />
  </div>

export default Home
