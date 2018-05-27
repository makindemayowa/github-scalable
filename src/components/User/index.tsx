import React from 'react'
import Loading from 'components/Common/Loading'
import UserListContainer from 'containers/User/List'

interface UserPropsInterface {
  loading: boolean
  hasSearched: boolean
}
const User = ({ loading, hasSearched }: UserPropsInterface) => {
    const userList = hasSearched && <UserListContainer />
    return (
      <Loading loading={loading}>
        {userList}
      </Loading>
    )
}

export default User
