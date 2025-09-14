// index.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; // 关键！Render 会提供 PORT
app.get("/", (req, res) => {
  res.send("Hello from Express on Render!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
