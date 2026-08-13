const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = require("../../database/db");

// Test route
router.get("/test", (req, res) => {
    res.send("Auth route is working!");
});

// Register route
router.post("/register", async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    const name = `${firstName} ${lastName}`;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, hashedPassword],
        (err, result) => {

            if (err) {
                console.log("Registration error:", err);
                return res.status(500).send("Registration failed!");
            }

            res.send("Registration successful! 🎉");
        }
    );
});

// Login route
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {

        if (err) {
            console.log("Login error:", err);
            return res.status(500).send("Login failed!");
        }

        if (results.length === 0) {
            return res.status(401).send("Invalid email or password!");
        }

        const user = results[0];

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).send("Invalid email or password!");
        }

        res.send("Login successful! 🎉");
    });
});
router.get("/me", (req, res) => {

    const email = req.query.email;

    if (!email) {
        return res.status(400).json({
            message: "Email is required"
        });
    }

    const sql = `
        SELECT name, email
        FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], (err, results) => {

        if (err) {
            console.log("User fetch error:", err);
            return res.status(500).json({
                message: "Failed to fetch user"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(results[0]);
    });
});
// Admin Login
router.post("/admin-login", async (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM admins WHERE email = ?";

    db.query(sql, [email], async (err, results) => {

        if (err) {
            console.log("Admin login error:", err);
            return res.status(500).send("Admin login failed!");
        }

        if (results.length === 0) {
            return res.status(401).send("Invalid admin email or password!");
        }

        const admin = results[0];

        const passwordMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if (!passwordMatch) {
            return res.status(401).send("Invalid admin email or password!");
        }

        res.send("Admin login successful! 🎉");
    });
});
// Get all registered users for admin dashboard
router.get("/users", (req, res) => {

    const sql = `
        SELECT id, name, email, created_at
        FROM users
        ORDER BY id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.log("Users fetch error:", err);

            return res.status(500).json({
                message: "Failed to fetch users"
            });
        }

        res.json(results);
    });
});
module.exports = router;