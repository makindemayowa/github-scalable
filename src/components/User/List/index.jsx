import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { List } from 'react-virtualized'
import Header from 'components/User/Header'
import './style.css'

class UserList extends PureComponent {
  getDimension = (dimension) => {
    if (window.innerWidth > 600) {
      return dimension === 'height' ? 200 : window.innerWidth - 100
    } else {
      return dimension === 'height' ? 300 : window.innerWidth
    }
  }

  state = {
    width: this.getDimension('width'),
    rowHeight: this.getDimension('height'),
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        width: this.getDimension('width'),
        rowHeight: this.getDimension('height'),
      })
    }
  }

  rowRenderer = ({ index, key, style }) => {
    const { users } = this.props
    const { login, avatar_url, score, html_url } = users[index]
    return (
      <div style={style} key={key} className="userList__item">
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
          <p className="userListItem__commit">
            <a href={html_url} target="_blank">View commits</a>
          </p>
        </div>
      </div>
    )
  }

  renderUsers = (list) => {
    const { width, rowHeight } = this.state
    const headerItems = [`${list.length} results`]
    return (
      <div className="userList__content">
        <Header items={headerItems} />
          <div className="userList__body">
            <List
              width={width}
              rowHeight={rowHeight}
              height={500}
              style={{ outline: 0 }}
              rowCount={list.length}
              rowRenderer={this.rowRenderer}
            />
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
