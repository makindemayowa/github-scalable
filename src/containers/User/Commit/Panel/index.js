import { connect } from 'react-redux'
import Panel from 'components/User/Commit/Panel'

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
  }
}

export default connect(null, null, mergeProps)(Panel)
