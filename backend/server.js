const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

const app = express();
dotenv.config();
db();

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user.routes"));

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});