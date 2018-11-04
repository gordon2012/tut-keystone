import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Ramen Noodles</h1>

      <img
        style={{ width: '300px', height: '300px' }}
        src="https://loremflickr.com/300/300?lock=1"
      />

      <h2>Ingredients List</h2>
      <ul>
        <li>First Ingredient</li>
        <li>Second Ingredient</li>
        <li>Third Ingredient</li>
      </ul>

      <h2>Cooking Instructions</h2>
      <p>Add cooking instructions here</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
