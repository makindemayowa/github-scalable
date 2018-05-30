import React, { Fragment } from 'react'
import { Field } from 'redux-form'
import './style.css'

interface HeaderPropsInterface {
  name: string
  className?: string
  placeholder: string
  pristine?: boolean
  submitting?: boolean
  handleSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined
}

const renderField = ({ input, className, type, placeholder }: any) => (
  <input
    className={className}
    placeholder={placeholder}
    type={type}
    {...input}
  />
)

const UserSearch = ({ handleSubmit, pristine, submitting, name, placeholder, className }: HeaderPropsInterface) =>
  <Fragment>
    <form className="userSearch__inputWrapper" onSubmit={handleSubmit}>
      <Field
        name={name}
        type="text"
        component={renderField}
        placeholder={placeholder}
        className={className || 'userSearch__input'}
      />
      {handleSubmit && <div className="userSearch__submit">
        <button
          type="submit"
          disabled={pristine || submitting}>Search</button>
      </div>}
    </form>
  </Fragment>

export default UserSearch
