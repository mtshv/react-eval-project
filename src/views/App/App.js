import './app.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'

import Header from 'components/Header'
import UserView from 'components/UserView'
import ReposView from 'components/ReposView'
import {getUser} from 'actions/userActions'
import {getRepos} from 'actions/reposActions'
import {ACTIVE_TAB} from 'constants/constants'

const mapStateToProps = (state) => {
  return {...state}
}
const mapDispatchToProps = dispatch => (bindActionCreators({
  getRepos,
  getUser
}, dispatch))

@withRouter
@connect(mapStateToProps, mapDispatchToProps)

export default class App extends Component {
  static propTypes = {
    getRepos: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array,
    user: PropTypes.object,
    activeTab: PropTypes.string
  }

  componentDidMount () {
    const {getUser, getRepos} = this.props

    getUser()
    getRepos()
  }

  render () {
    const {repos, user, activeTab} = this.props
    const headerUserInfo = {name: user.name, profileURL: user.html_url}

    if (Object.keys(user).length === 0) return null
    return (
      <div styleName='app'>
        <Header user={headerUserInfo} />
        <div styleName='container'>
          {activeTab === ACTIVE_TAB.user && <UserView user={user} />}
          {activeTab === ACTIVE_TAB.repos && <ReposView repos={repos} />}
        </div>
      </div>
    )
  }
}
