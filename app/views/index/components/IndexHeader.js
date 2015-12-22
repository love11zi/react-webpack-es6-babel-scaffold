import Tappable from 'react-tappable';
import React, { Component, PropTypes } from 'react'

export default class IndexHeader extends Component {
  constructor(props) {
    super(props)
    this.handleMoreClick = this.handleMoreClick.bind(this)
  }

  handleMoreClick() {
    let morePanel = this.refs["morePanel"]

    morePanel.setAttribute("data-show", 
      morePanel.getAttribute("data-show") ? "" : "true"
    )
  }

  render() {
    const { title } = this.props

    return (
      <div className="car-header">
      	<span className="header-back" onClick={history.go(-1)}>
          <i className="icon-title-back"></i>
        </span> 
        <h2>{title}</h2>
        <span className="header-more" onClick={this.handleMoreClick}>
          <i className="icon-more2"></i>
          <ul className="header-more-panel" data-show="" ref="morePanel">
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
