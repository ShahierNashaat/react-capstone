import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div>
      <Link to="/"><i className="fas fa-chevron-left" /></Link>
      { new Date().getFullYear() }
    </div>
    <div>
      Countries
    </div>
    <div>
      <i className="fas fa-microphone" />
      <i className="fas fa-cog" />
    </div>
  </nav>
);

export default Header;
