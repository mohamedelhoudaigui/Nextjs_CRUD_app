import React from 'react';
import ButtonComponent from './ButtonComponent';
import TableComponent from './TableComponent';

const MainComponent = () => {
  return (
	<div>
	  <h1>Crud App</h1>
	  <TableComponent />
	  <ButtonComponent
		label="Add User"
		type="button"
		mode="add"
		/>
	  <ButtonComponent
		label="Delete User"
		type="button"
		mode="delete"
	   />
	  <ButtonComponent
		label="Update User"
		type="button"
		mode="update"
	  />
	</div>
  );
}

export default MainComponent;