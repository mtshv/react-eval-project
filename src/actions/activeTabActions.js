import {SET_ACTIVE_TAB} from 'constants/actionTypes'

export function setActiveTab (tabName) {
  return (dispatch) => dispatch({
    type: SET_ACTIVE_TAB,
    payload: tabName
  })
}
