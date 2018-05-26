import { connect } from 'react-redux'
import UserSearch from 'components/UserSearch'
// import { getStats } from 'redux/table/actions'

const mapDispatchToProps = {
  // onClick: getStats,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...dispatchProps,
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(UserSearch)
