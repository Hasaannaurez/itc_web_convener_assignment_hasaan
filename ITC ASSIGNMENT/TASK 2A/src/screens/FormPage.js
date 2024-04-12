// FormPage.js

import React, { useState } from "react";

const FormPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required/>
        </div>
        
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" required />
        </div>
       
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write here..."/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
