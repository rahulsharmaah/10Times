// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Event Management App</h1>
        {/* Add any header content you need */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Add any footer content you need */}
        <p>&copy; 2023 Event Management App</p>
      </footer>
    </div>
  );
};

export default Layout;
