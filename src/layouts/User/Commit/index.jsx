import React from 'react'
import HeaderContainer from 'containers/User/Commit/Header'
import SidebarContainer from 'containers/User/Commit/Sidebar'
import PanelContainer from 'containers/User/Commit/Panel'

const Commit = () => (
  <div>
    <div>
      <HeaderContainer />
    </div>
    <div>
      <SidebarContainer />
    </div>
    <div>
      <PanelContainer />
    </div>
  </div>
)

export default Commit
