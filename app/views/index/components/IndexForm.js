import React, { Component, PropTypes } from 'react'


class RentCity extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="rent-city">
        <div className="pick-city">
          <span className="label">取车城市</span>
          <h2 data-placeholder="true">南京</h2>
        </div>
        <div className="back-city">
          <span className="label">还车城市</span>
          <h2 data-placeholder="true">南京</h2>
        </div>  
      </div>
    )
  }
}

class CurrentPosition extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="current-position">
        <i className="icon-location"></i>
        <h3>我的位置</h3>
      </div>
    )
  }
}

class RentTime extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="rent-time">
        <div className="pick-time">
          <div className="label">取车时间</div>
          <p>
            <em>12月22日</em><span>10:00</span>
          </p>
          <p className="day-alias">今天</p>
        </div>
        <span className="time-range">租期<strong>2</strong>天</span>
        <div className="back-time">
          <div className="label">还车时间</div>
          <p>
            <em>12月24日</em><span>10:00</span>
          </p>
          <p className="day-alias">后天</p>
        </div>
      </div>
    )
  }
}

class PickArea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="pick-area">
        <div className="label">取车区域</div>
        <h2 data-placeholder="true">机场/火车站/区域/地铁</h2>
        <span className="arrow-right"></span>
      </div>
    )
  }
}


export default class IndexForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="indexFormContainer">
        <RentCity />
        <CurrentPosition />
        <RentTime />
        <PickArea />
        <a href="javascript:;" className="searchBtn">搜索</a>
      </div>
    )
  }
}

IndexForm.propTypes = {
  
}
