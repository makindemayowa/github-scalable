import { connect } from 'react-redux'
import Header from 'components/User/Header'

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    items: ['name'],
    ...ownProps,
  }
}

export default connect(null, null, mergeProps)(Header)
