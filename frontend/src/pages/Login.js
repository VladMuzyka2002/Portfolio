import React, { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password: ${inputValue}`);
    setInputValue(''); 
  };

  return (
    <div className="center-container">
      <form onSubmit={handleSubmit}>
        <input
          type="password"  
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter password"
          className="text-input"
        />
        <button type="submit" className="enter-button">Enter</button>
      </form>
    </div>
  );
}

export default Login;
