import './userView.scss'

import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {setActiveTab} from 'actions/activeTabActions'
import {ACTIVE_TAB} from 'constants/constants'

const mapStateToProps = ({ activeTab }) => {
  return {activeTab}
}
const mapDispatchToProps = dispatch => (bindActionCreators({setActiveTab}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)

export default class UserView extends Component {
  static propTypes = {
    setActiveTab: PropTypes.func.isRequired,
    user: PropTypes.object
  }

  state = {
    activeTab: ACTIVE_TAB.user
  }

  setActiveTab = (tabName) => {
    this.props.setActiveTab(tabName)
    this.setState({activeTab: tabName})
  }

  render () {
    const {user: {name, login, bio, blog, followers, following}} = this.props
    return (
      <div styleName='userView'>
        <h2>{name}</h2>
        <h3>{login}</h3>
        {/* eslint-disable-next-line is not working :( */}
        <img styleName='avatar' src={this.props.user.avatar_url} alt='profile_pic' />
        <div>Bio: {bio}</div>
        <div>Blog: <a href={blog}>{blog}</a></div>
        <div> # Followers: {followers}</div>
        <div> # Following: {following}</div>
      </div>
    )
  }
}
