import React from 'react';

// import Link inside your `navigation.js` file.
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          {/* // use Link to instead of href  */}
        <Link to ="/">Home</Link>
        </div>
        <div>
        <Link to ="/About/">About</Link>
        </div>
        <div>
        <Link to ="/Contact/">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
