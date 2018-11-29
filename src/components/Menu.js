import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'

import './Menu.css'

export class Menu extends Component {

  render() {
    return (

      <ul className="menu">
        <li className="liMenu"><Link to = "/">Home</Link></li>
        <li className="liMenu"><Link to = "/library">Library</Link></li>
        <li className="liMenu"><Link to = "/my-library">My Library</Link></li>
        <li className="liMenu"><Link to = "/add-to-my-library">Add to My Library</Link></li>
      </ul>
    )
  }

}
