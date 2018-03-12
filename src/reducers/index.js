import {combineReducers} from 'redux'
import repos from './reposReducer'
import user from './userReducer'
import activeTab from './activeTabReducer'

export default combineReducers({
  repos,
  user,
  activeTab
})
