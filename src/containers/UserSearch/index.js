import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { userSearchForm } from 'redux/forms'
import { searchQuery } from 'redux/user/actions'
import UserSearch from 'components/UserSearch'

const mapDispatchToProps = {
  searchQuery,
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    onSubmit: query => dispatchProps.searchQuery(query),
    ...ownProps,
  }
}

const UserSearchForm = reduxForm({
  form: userSearchForm.name,
  validate: ({ q }) => {
    const errors = {}
    if (!q) {
      errors.q = 'Please enter a github username'
    }
    return errors
  },
})(UserSearch)

export default connect(null, mapDispatchToProps, mergeProps)(UserSearchForm)
