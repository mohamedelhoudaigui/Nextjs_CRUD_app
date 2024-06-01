import { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import TableComponent from './TableComponent';

const MainComponent = () => {

	const [updateTable, setUpdateTable] = useState(false);

	const updateFunc = () => {
		setUpdateTable(prevState => !prevState);
	}

	return (
	<div>
		<h1>Crud App</h1>
		<TableComponent key={updateTable}/>
		<ButtonComponent
		label="Add User"
		type="button"
		mode="add"
		updateFunc={updateFunc}
		/>
		<ButtonComponent
		label="Delete User"
		type="button"
		mode="delete"
		updateFunc={updateFunc}
		/>
		<ButtonComponent
		label="Update User"
		type="button"
		mode="update"
		updateFunc={updateFunc}
		/>
	</div>
	);
}

export default MainComponent;