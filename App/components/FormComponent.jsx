import React, { useState } from 'react';
import AddUserComponent from './AddUserComponent';
import UpdateUserComponent from './UpdateUserComponent';
import DeleteUserComponent from './DeleteUserComponent';

function FormComponent({ mode }) {
  if (mode == 'add') {
    return <AddUserComponent />;
  } else if (mode == 'update') {
    return <UpdateUserComponent />;
  } else if (mode == 'delete') {
    return <DeleteUserComponent />;
  } 
}

export default FormComponent;
