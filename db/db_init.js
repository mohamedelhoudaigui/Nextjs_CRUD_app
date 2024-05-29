const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./next_db.db', (err) => {
	if (err) {
	  console.error(err.message);
	  return;
	}
	console.log('Connected to the SQLite database.');
  });

  db.serialize(() => {
	db.run(`CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
    	name TEXT UNIQUE NOT NULL,
    	email TEXT UNIQUE NOT NULL,
    	password TEXT UNIQUE NOT NULL
	)`, err => {
		if (err){
			console.error(err.message);
			return;
		}
		console.log('users table created');
	});
  });

