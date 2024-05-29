import React, { useState } from 'react';

function FormComponent() {
	
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		
	}

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
			<button type='submit'>Submit</button>
		</form>
	);
}

export default FormComponent;