import React, { PureComponent } from 'react'
import './style.css'

class Commit extends PureComponent {
  renderLoaders = () => {
    let i = 5
    const loaders = []
    while (i > 0) {
      loaders.push(
        <div className="userCommitsSidebar__item">
          <h5 className="loading__background loader__name" />
          <p className="loading__background loader__status" />
          <p className="loading__background loader__url" />
        </div>
      )
      i -= 1
    }
    return loaders
  }

  render() {
    return (
      <div className="userCommits__sidebar">
        <h2>Repos</h2>
        <div className="userCommitsSidebarItem__wrapper">
          {this.renderLoaders()}
        </div>
      </div>
    )
  }
}

export default Commit
