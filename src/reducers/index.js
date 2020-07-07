import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import loading from './loading'
import auth from './auth'

// import { RESET_STATE } from 'constants/action-types'

const appReducer = combineReducers({
  router,
  loading,
  auth
})

export default (state, action) => {
  // if (action.type === RESET_STATE) {
  //   state = action.payload
  // }

  console.log(action)

  return appReducer(state, action)
}
