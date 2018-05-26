import React, { Fragment } from 'react'
import { Field } from 'redux-form'
import './style.css'

interface HeaderPropsInterface {
  pristine: boolean
  submitting: boolean
  handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined
}

const renderErrors = ({ touched, error, warning }: any) => (
  touched && ((error && <div className="hidden error">{error}</div>) ||
  (warning && <div className="hidden warning">{warning}</div>))
)

const renderField = ({ input, className, type, placeholder, meta }: any) => (
  <Fragment>
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      {...input}
    />
    {renderErrors(meta)}
  </Fragment>
)

const UserSearch = ({ handleSubmit, pristine, submitting }: HeaderPropsInterface) =>
  <Fragment>
    <h1 className="userSearch__text">Search Github Users</h1>
    <form className="userSearch__inputWrapper" onSubmit={handleSubmit}>
      <Field
        name="q"
        type="text"
        component={renderField}
        placeholder="Enter username"
        className="userSearch__input"
      />
      <div className="userSearch__submit">
        <button
          type="submit"
          disabled={pristine || submitting}>Search</button>
      </div>
    </form>
  </Fragment>

export default UserSearch
