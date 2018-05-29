import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import UserSearch from 'containers/User/Search'
import Loading from 'components/Common/Loading'
import UserListContainer from 'containers/User/List'
import CommitLayout from 'layouts/User/Commit'
import './style.css'

interface UserPropsInterface {
  loading: boolean
  match: any
  path: RouteComponentProps<any>
}

const User = ({ loading, match: { path } }: UserPropsInterface) => {
    return (
      <Loading loading={loading}>
        <div className="userDashboard__wrapper">
          <div className="userSearch__wrapper">
            <UserSearch/>
          </div>
          <Switch>
            <Route component={CommitLayout} path={`${path}/commits/:user`} />
            <Route component={UserListContainer} />
          </Switch>
        </div>
      </Loading>
    )
}

export default User
