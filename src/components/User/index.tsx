import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserSearch from 'containers/User/Search'
import Loading from 'components/Common/Loading'
import UserListContainer from 'containers/User/List'
import './style.css'

interface UserPropsInterface {
  loading: boolean
}

const User = ({ loading }: UserPropsInterface) => {
    return (
      <Loading loading={loading}>
        <div className="userDashboard__wrapper">
          <div className="userSearch__wrapper">
            <UserSearch/>
          </div>
          <Switch>
            <Route component={UserListContainer} />
          </Switch>
        </div>
      </Loading>
    )
}

export default User
