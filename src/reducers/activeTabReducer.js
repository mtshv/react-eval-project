import {SET_ACTIVE_TAB} from 'constants/actionTypes'
import {ACTIVE_TAB} from 'constants/constants'

const initialState = ACTIVE_TAB.user

export default function activeTab (state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return action.payload
    default:
      return state
  }
}
