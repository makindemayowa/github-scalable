import React, { Fragment } from 'react'
import Header from 'components/User/Header'
import './style.css'

interface HeaderWrapperPropsInterface {
  goBack: any
}

const HeaderWrapper = ({ goBack }: HeaderWrapperPropsInterface) => {
  const backButton = (
    <span onClick={goBack} className="header__backbutton" />
  )

  return (
    <Fragment>
      <Header items={[backButton]} />
    </Fragment>
  )
}

export default HeaderWrapper
