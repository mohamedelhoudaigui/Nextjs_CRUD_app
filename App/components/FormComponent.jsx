import InputField from './InputFieldComponent';
import ButtonComponent from './ButtonComponent';
import React, { useState } from 'react';
import pb from '../pocketbase';

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
      <InputField
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <ButtonComponent label="Sign in" type="submit" />
    </form>
  );
}

export default FormComponent;
