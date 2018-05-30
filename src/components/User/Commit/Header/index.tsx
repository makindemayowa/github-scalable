import React, { Fragment } from 'react'
import Header from 'components/User/Header'
import Search from 'components/Common/Search'
import './style.css'

interface HeaderWrapperPropsInterface {
  goBack: any
  user: string
}

const HeaderWrapper = ({ goBack, user }: HeaderWrapperPropsInterface) => {
  const backButton = (
    <span key="backButton" onClick={goBack} className="header__backbutton" />
  )

  const userName = (
    <span key="userName" className="header__username">{user}</span>
  )

  const filterInput = (
    <Fragment key="filterInput">
      <Search
        name="commit"
        className="headerInput__filter"
        placeholder="Filter commit message"
      />
    </Fragment>
  )

  return (
    <Fragment>
      <Header items={[backButton, userName, filterInput]} />
    </Fragment>
  )
}

export default HeaderWrapper
