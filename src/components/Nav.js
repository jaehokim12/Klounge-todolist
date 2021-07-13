import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlist: [
        { to: '/', title: 'Home' },
        { to: '/Counter', title: 'Counter' },
      ],
    };
  }
  render() {
    return (
      <div className="Container">
        {this.state.navlist.map((navlist, index) => (
          // <button key={index} onClick={()=>{
          //         <NavLink exact to={navlist.to}/>
          //     }
          // }>
          //         {navlist.title}
          // </button>
          <div key={index}>
            <Link to={navlist.to}>{navlist.title}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Nav;
