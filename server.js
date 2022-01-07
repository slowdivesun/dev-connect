const express = require("express");

const app = express();

app.get("/", (re, res) => res.send('API Running'));

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))