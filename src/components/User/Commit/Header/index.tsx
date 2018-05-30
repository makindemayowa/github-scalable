import React, { Fragment } from 'react'
import Header from 'components/User/Header'
import './style.css'

const backButton = (
  <span className="header__backbutton" />
)

const HeaderWrapper = () => (
  <Fragment>
    <Header items={[backButton]} />
  </Fragment>
)

export default HeaderWrapper
