import React from 'react'
import UserHeader from 'components/Common/UserHeader'
import './style.css'

interface UserListPropsInterface {
  users: Array<any>
}

const renderUsers = (list: Array<{}>) => {
  const headerItems = [`${list.length} results`]
  return (
    <div className="userList__content">
      <UserHeader items={headerItems} />
    </div>
  )
}

const UserList = ({ users }: UserListPropsInterface) => (
  <div className="userList__wrapper">
    {users.length > 0 ? renderUsers(users) : <h1>No results</h1>}
  </div>
)

export default UserList
