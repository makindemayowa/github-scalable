import { connect } from 'react-redux'
import Header from 'components/User/Commit/Header'

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
  }
}

export default connect(null, null, mergeProps)(Header)
