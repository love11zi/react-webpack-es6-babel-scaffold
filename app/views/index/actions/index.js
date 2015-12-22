import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'

export function chooseRentCity() {
  return {
    type: CHOOSE_RENT_CITY
  }
}

export function getCurrentLocation(pos) {
  return {
    type: GET_CURRENT_LOCATION,
    pos: pos
  }
}

export function getCurrentLocationAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(getCurrentLocation({
        lat: 120,
        lng: 30
      }))
    }, 1000)
  }
}

