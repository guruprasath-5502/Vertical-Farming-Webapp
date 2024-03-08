const express = require("express");
const cors = require("cors");
require("dotenv").config();

const dataRoutes = require("./routes/dataRoute");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/verticalfarming", dataRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;
