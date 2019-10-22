import React from 'react';

import Header from './Header';

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      withBackground: false
    };
  }

  render = () => Header({
    ...this.props,
    ...this.state
  });
}

Header.defaultProps = {
  title: ' ',
  action: null,
  openDrawer: null
};
