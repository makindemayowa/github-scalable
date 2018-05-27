import { connect } from 'react-redux'
import { isLoading, getUserSearchTerm } from 'redux/user/selectors'
import Dashboard from 'components/Dashboard'

const mapStateToProps = (state) => {
  return {
    loading: isLoading(state),
    hasSearched: !!getUserSearchTerm(state),
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
  }
}

export default connect(mapStateToProps, null, mergeProps)(Dashboard)
