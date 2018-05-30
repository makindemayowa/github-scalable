import { connect } from 'react-redux'
import Header from 'components/User/Commit/Header'
import { goBack } from 'redux/user/actions'

const mapDispatchToProps = {
  goBack,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    goBack: () => dispatchProps.goBack(),
    ...ownProps,
  }
}

export default connect(null, mapDispatchToProps, mergeProps)(Header)
