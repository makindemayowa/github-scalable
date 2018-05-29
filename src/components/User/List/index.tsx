import React from 'react'
import Header from 'components/User/Header'
import './style.css'

interface UserListPropsInterface {
  users: Array<any>
}

const renderList = (items: Array<{}>) => (
  items.map(({ login, avatar_url, score, html_url }: any) => (
      <div className="userList__item">
        <img
          className="userListItem__picture"
          src={avatar_url} alt={`${login} user image`}
        />
        <div className="userListItem__info">
          <p className="userListItem__username">
            <a href={html_url} target="_blank">{login}</a>
          </p>
          <p className="userListItem__scores">
            <span className="value">{score}</span>
            <span className="text"> scores</span></p>
          <p className="userListItem__scores">{score} scores</p>
        </div>
      </div>
    )
  )
)

const renderUsers = (list: Array<{}>) => {
  const headerItems = [`${list.length} results`]
  return (
    <div className="userList__content">
      <Header items={headerItems} />
        <div className="userList__body">
          {renderList(list)}
        </div>
    </div>
  )
}

const UserList = ({ users }: UserListPropsInterface) => (
  <div className="userList__wrapper">
    {users.length > 0 ? renderUsers(users) : <h1>No results</h1>}
  </div>
)

export default UserList
