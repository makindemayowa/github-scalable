import { connect } from 'react-redux'
import Sidebar from 'components/User/Commit/Sidebar'

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
  }
}

export default connect(null, null, mergeProps)(Sidebar)
