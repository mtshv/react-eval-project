import './reposView.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BarChart from './BarChart'

export default class ReposView extends Component {
  static propTypes = {
    repos: PropTypes.array
  }

  constructor (props) {
    super(props)
    const forks = props.repos.map(repo => ({label: repo.name, val: repo.forks}))
      .sort((a, b) => (b.val) - (a.val))
    const openIssues = props.repos.map(repo => ({label: repo.name, val: repo.open_issues}))
      .sort((a, b) => (b.val) - (a.val))
    const watchers = props.repos.map(repo => ({label: repo.name, val: repo.watchers}))
      .sort((a, b) => (b.val) - (a.val))
    this.state = {forks: forks, openIssues: openIssues, watchers: watchers}
  }

  render () {
    const {forks, openIssues, watchers} = this.state
    return (
      <div styleName='reposView'>
        <h3>Forks:</h3>
        <BarChart repos={forks} />
        <h3>Open issues:</h3>
        <BarChart repos={openIssues} />
        <h3>Watchers:</h3>
        <BarChart repos={watchers} />
      </div>
    )
  }
}
