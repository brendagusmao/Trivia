import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import { PropTypes } from 'prop-types';

class Header extends Component {
  render() {
    const { name, email } = this.props;
    console.log(this.props);
    const endpoint = 'https://www.gravatar.com/avatar/';
    const hash = MD5(email);
    const gravatar = `${endpoint}${hash}`;
    return (
      <div className="Header">
        <div className="Header__container">
          <div className="Header__img">
            <img src={ gravatar } alt="" data-testid="header-profile-picture" />
          </div>
          <div className="Header__name">
            <p data-testid="header-player-name">{name}</p>
          </div>
          <div className="Header__score">
            <p data-testid="header-score">0</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { name, email } }) => ({
  name,
  email,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);