import React, { useEffect, useState } from 'react';
import pb from '../pocketbase';
import styles from './css/Table.module.css';

const TableComponent = () => {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		const fetchData = async () => {
			const allRecords = await pb.collection('next_users').getFullList();
			setUsers(allRecords);
		}
		fetchData();
	}, []);
	return (
		  <table className={styles.Table}>
			<thead>
				<tr className={styles.tr}>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
					<th>Password</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) =>(
					<tr key = {index}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.password}</td>
					</tr>
				))}
			</tbody>
		  </table>
	  );
}

export default TableComponent;