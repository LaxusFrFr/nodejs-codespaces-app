const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fullName = "Earl Daniel D. Dipasupil";
const section = "BSIT SM - 4102";
const quote = "The only way to do great work is to love what you do.";

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; font-family: Arial, sans-serif; margin-top: 50px;">
      <h1>${fullName}</h1>
      <h2>${section}</h2>
      <p>${quote}</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});