const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        environment: "UAT"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
