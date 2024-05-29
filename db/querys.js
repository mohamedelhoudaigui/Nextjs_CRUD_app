const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./mydatabase.db', (err) =>{
	if (err) {
	  console.error(err.message);
	  return;
	}
	console.log('Connected to the SQLite database.');
});

function AddUser(name, email, password){
	db.run(`INSERT INTO users (name, email, password) VALUES(?, ?, ?)`, [name, email, password], err => {
		if (err){
			console.error(err.message);
			return;
		}
		console.log('user added');
	});
}