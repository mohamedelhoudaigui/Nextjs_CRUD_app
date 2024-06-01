import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputField from "./InputFieldComponent";
import pb from "../pocketbase"

const UpdateUserComponent = () => {
	
	const [ID, setID] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
		const newUser = {
			ID: ID,
			name: name,
			email: email,
			password: password,
		};
		const response = await pb.collection('next_users').update(newUser.ID, newUser);
		console.log(response);
		alert('operation done successfully!');
		} catch (error) {
			console.error('Error:', error);
			alert('Failed to do update operation');
		}
	}

		return (
		<form onSubmit={handleSubmit}>
		<InputField
			label="ID"
			type="text"
			name="ID"
			placeholder="Enter user ID"
			value={ID}
			onChange={(event) => setID(event.target.value)}
		/>
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
		<ButtonComponent label="ADD" type="submit" />
		</form>
		);
}

export default UpdateUserComponent;