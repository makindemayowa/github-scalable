import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Header from 'components/User/Header'
import './style.css'

class UserList extends PureComponent {
  renderList = (items) => (
    items.map(({ login, avatar_url, score, html_url }) => (
        <div key={login} className="userList__item">
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

  renderUsers = (list) => {
    const headerItems = [`${list.length} results`]
    return (
      <div className="userList__content">
        <Header items={headerItems} />
          <div className="userList__body">
            {this.renderList(list)}
          </div>
      </div>
    )
  }

  render() {
    const { users } = this.props
    return (
      <div className="userList__wrapper">
        {users.length > 0 ? this.renderUsers(users) : <h1>No results</h1>}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList
