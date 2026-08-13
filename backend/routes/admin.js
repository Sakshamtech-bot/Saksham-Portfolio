const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const db = require("../../database/db");

// Create admin
router.post("/create", async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO admins (name, email, password)
            VALUES (?, ?, ?)
        `;

        db.query(
            sql,
            [name, email, hashedPassword],
            (err, result) => {

                if (err) {
                    console.log("Admin creation error:", err);
                    return res.status(500).json({
                        message: "Admin creation failed!"
                    });
                }

                res.json({
                    message: "Admin created successfully! 🎉"
                });
            }
        );

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong!"
        });
    }
});
module.exports = router;