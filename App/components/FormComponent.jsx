import React, { useState } from 'react';
import pb from '../pocketbase';  // Ensure this path matches where your pocketbase.js is located

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        name: name,
        email: email,
        password: password,
        passwordConfirm: password, // Assuming you need password confirmation
      };
      const response = await pb.collection('next_users').create(newUser);
      console.log(response);
      alert('User added successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add user.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
