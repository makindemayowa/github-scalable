import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class UserList extends PureComponent {
  render() {
    const { users } = this.props
    return users.length > 0 ? <div>{users.length} results</div> : <div>No results</div>
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList
