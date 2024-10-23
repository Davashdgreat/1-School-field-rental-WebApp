import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-2xl">School Field Rental</h1>
      </header>
      <main className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;
