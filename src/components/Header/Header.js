import './header.scss'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setActiveTab} from 'actions/activeTabActions'
import {ACTIVE_TAB} from 'constants/constants'

const mapStateToProps = ({ activeTab }) => { return {activeTab} }
const mapDispatchToProps = dispatch => (bindActionCreators({setActiveTab}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)

export default class Header extends Component {
  static propTypes = {
    setActiveTab: PropTypes.func.isRequired,
    user: PropTypes.object,
    activeTab: PropTypes.string
  }

  state = {}

  setActiveTab = (tabName) => {
    this.props.setActiveTab(tabName)
    this.setState({activeTab: tabName})
  }

  render () {
    const { user: {name, profileURL}, activeTab } = this.props
    return (
      <div styleName='header'>
        <h2>Mini data visualization app for a JavaScript hero, <a href={profileURL}>{name}</a>:</h2>
        <div>
          <button
            styleName='button'
            disabled={activeTab === ACTIVE_TAB.user}
            onClick={() => this.setActiveTab(ACTIVE_TAB.user)}
          >
            User
          </button>
          <button
            styleName='button'
            disabled={activeTab === ACTIVE_TAB.repos}
            onClick={() => this.setActiveTab(ACTIVE_TAB.repos)}
          >
            Repos
          </button>
        </div>
      </div>
    )
  }
}
