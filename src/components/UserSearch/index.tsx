import React, { Fragment } from 'react'
import Input from 'components/Common/Input'
import './style.css'

const UserSearch = () =>
  <Fragment>
    <h1 className="userSearch__text">Search Github Users</h1>
    <div className="userSearch__inputWrapper">
      <Input
        className="userSearch__input"
        placeholder="Enter username"
      />
    </div>
  </Fragment>

export default UserSearch
