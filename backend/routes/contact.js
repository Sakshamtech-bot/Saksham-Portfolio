const express = require("express");
const router = express.Router();

const db = require("../../database/db");

// Contact form route
router.post("/", (req, res) => {

    const { name, email, message } = req.body;

    const sql = `
        INSERT INTO contact_messages (name, email, message)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, message],
        (err, result) => {

            if (err) {
                console.log("Contact error:", err);
                return res.status(500).send("Message send failed!");
            }

            res.send("Message sent successfully! 🎉");
        }
    );
});
// Get all contact messages
router.get("/", (req, res) => {

    const sql = `
        SELECT id, name, email, message, created_at
        FROM contact_messages
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.log("Fetch messages error:", err);
            return res.status(500).send("Failed to fetch messages!");
        }

        res.json(results);
    });
});
module.exports = router;