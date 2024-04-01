const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('database.db')
db.run('INSERT INTO users(name, password, gender) VALUES (?, ?, ?)', ['N', 'N', 'N'])