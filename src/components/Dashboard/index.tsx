import React from 'react'
import Loading from 'components/Common/Loading'
import UserListContainer from 'containers/UserList'

interface DashboardPropsInterface {
  loading: boolean
  hasSearched: boolean
}
const Dashboard = ({ loading, hasSearched }: DashboardPropsInterface) => {
    const userList = hasSearched && <UserListContainer />
    return (
      <Loading loading={loading}>
        {userList}
      </Loading>
    )
}

export default Dashboard
