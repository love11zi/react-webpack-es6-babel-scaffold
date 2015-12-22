import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

import { CHOOSE_RENT_CITY, GET_CURRENT_LOCATION } from '../actions'

function chooseRentCity(state = {}, action) {
  switch (action.type) {
    case CHOOSE_RENT_CITY:
      return {
      	"id": 1602,
      	"cityName": "南京"
      }
    default:
      return state
  }
}

function getCurrentLocation(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return {
      	"lat": 120,
      	"lng": 30
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  chooseRentCity,
  getCurrentLocation,
  router
})

export default rootReducer
