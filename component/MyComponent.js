import React from 'react';

const MyComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    // Your custom logic here
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;