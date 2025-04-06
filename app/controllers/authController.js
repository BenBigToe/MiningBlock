const bcrypt = require('bcryptjs');
const { db } = require('../database');

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    db.get("SELECT * FROM users WHERE username = ?", [username], async (err, user) => {
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      req.session.user = user;
      res.json({ success: true });
    });
  }
};