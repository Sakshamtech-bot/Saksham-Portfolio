require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT||3000;

const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const adminRoutes = require("./routes/admin");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is working! 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});