import './App.css';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Articles</h1>
      </header>
      <div className="articles">
        <div className="sidebar">
          <h2>Categories</h2>
          <h2 className="title">Title</h2>
        </div>
        <div className="main">
          <h2 className="details">Details</h2>
          <h2>Rate it</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
