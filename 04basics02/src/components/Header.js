import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <NavLink className="p-2" to="/csstransition">CSSTransition</NavLink>
              <NavLink className="p-2" to="/tgroup">Tgroup</NavLink> - 
              <NavLink className="p-2 " to="/transition">Transition</NavLink>
            </nav>
          </div>
        </header>
    )
}

export default Header;