import React, { Component } from 'react';

export default class TitleBar extends Component {

  renderSubTitle() {
    if(this.props.subTitle) {
      return <h2 className="title-bar__subtitle">{this.props.subTitle}</h2>;
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubTitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired
}
TitleBar.defaultProps = {
  title: 'Default title'
}
