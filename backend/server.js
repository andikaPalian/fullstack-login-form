const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

const app = express();
dotenv.config();
db();

app.use(express.json());
app.use(cors({
    // Sesuaikan dengan URL frontend 
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use("/api/user", require("./routes/user.routes"));

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});