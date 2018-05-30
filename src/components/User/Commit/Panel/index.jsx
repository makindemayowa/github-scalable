import React, { PureComponent } from 'react'
import { v1 } from 'uuid'
import './style.css'


const loader1 = (<span className="loading__background--dark loader1__description repo__description" />)
const loader2 = () => (
  <div key={v1()} className="userCommitsPanel__item">
    <h5>Message <span className="loading__background loader2__message commit__message" /></h5>
    <h5 className="loading__background loader2__url commit__url" />
    <h5>Author <span className="loading__background loader2__author" /></h5>
    <h5>Date <span className="loading__background loader2__date" /></h5>
  </div>
)

class Commit extends PureComponent {
  renderLoaders = () => {
    let i = 5
    const loaders = []
    while (i > 0) {
      loaders.push(loader2())
      i -= 1
    }
    return loaders
  }

  render() {
    return (
      <div className="userCommits__panel">
        <h4>Repo description {loader1}</h4>
        <div className="userCommitsPanelItems__wrapper">
          <h2>Commits</h2>
          {this.renderLoaders()}
        </div>
      </div>
    )
  }
}

export default Commit
