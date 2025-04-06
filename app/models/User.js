const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('/data/miningblock/miningblock.db');

module.exports = {
  createUser: (email, username, password, callback) => {
    db.run(
      `INSERT INTO users (email, username, password) VALUES (?, ?, ?)`,
      [email, username, password],
      callback
    );
  }
};