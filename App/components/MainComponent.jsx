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
		/>
	  <ButtonComponent
		label="Delete User"
		type="button"
	   />
	  <ButtonComponent
		label="Update User"
		type="button"
	  />
	</div>
  );
}

export default MainComponent;