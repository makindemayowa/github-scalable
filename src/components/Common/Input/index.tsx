import React, { Fragment } from 'react'

interface InputPropsInterface {
  placeholder: string
  className?: string
}
const Home = ({ placeholder, className }: InputPropsInterface) =>
  <Fragment>
    <input
      placeholder={placeholder}
      className={className}/>
  </Fragment>

export default Home
