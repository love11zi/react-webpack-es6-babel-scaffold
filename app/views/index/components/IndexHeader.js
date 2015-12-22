import Tappable from 'react-tappable';
import React, { Component, PropTypes } from 'react'

export default class IndexHeader extends Component {
  constructor(props) {
    super(props)
    this.handleMoreClick = this.handleMoreClick.bind(this)
    this.state = {showMorePanel: false } 
  }

  handleMoreClick() {
    this.setState({"showMorePanel": !this.state.showMorePanel})
  }

  render() {
    const { title } = this.props
    const isShowPanel = this.state.showMorePanel ? "true" : "" 

    return (
      <div className="car-header">
      	<span className="header-back">
          <i className="icon-title-back"></i>
        </span> 
        <h2>{title}</h2>
        <span className="header-more" onClick={this.handleMoreClick}>
          <i className="icon-more2"></i>
          <ul className="header-more-panel" data-show={isShowPanel} ref="morePanel">
            <li>
              <a href="#"><i className="icon-order"></i>我的订单</a>
            </li>
            <li>
              <a href="#"><i className="icon-book-help"></i>常见问题</a>
            </li>
          </ul>
        </span>
      </div>
    )
  }
}

IndexHeader.propTypes = {
  title: PropTypes.string.isRequired
}
