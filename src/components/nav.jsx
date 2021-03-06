import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlist: [
        { to: '/', title: 'Home' },
        { to: '/Counter', title: 'Counter' },
        { to: '/homehook', title: 'Homehook' },
        { to: '/Counterhook', title: 'Counterhook' },
      ],
    };
  }

  render() {
    return (
      <div className="Container">
        {this.state.navlist.map((navlist, index) => (
          <div key={index}>
            <Link to={navlist.to}>
              {navlist.title}
              //
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Nav;
