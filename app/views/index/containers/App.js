import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import { bindActionCreators } from 'redux'
import IndexHeader from '../components/IndexHeader'
import IndexForm from '../components/IndexForm'
import * as IndexActions from '../actions/index'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div>
        <IndexHeader title="国内用车" />
        <IndexForm />
      </div>
    )
  }
}

App.propTypes = {
 
}




function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(IndexActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
