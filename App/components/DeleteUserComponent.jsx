import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputField from "./InputFieldComponent";
import pb from "../pocketbase"

const DeleteUserComponent = () => {

	const [ID, setID] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await pb.collection('next_users').delete(ID);
			console.log(response);
			alert('operation done successfully!');
		} catch (error) {
			console.error('Error:', error);
			alert('Failed to do delete operation');
		}
	}

	  return (
	<form onSubmit={handleSubmit}>
	  <InputField
		label="ID"
		type="text"
		name="ID"
		placeholder="Enter the user ID to delete"
		value={ID}
		onChange={(event) => setID(event.target.value)}
	  />
	  <ButtonComponent label="Delete" type="submit" />
	</form>
  );
}


export default DeleteUserComponent;