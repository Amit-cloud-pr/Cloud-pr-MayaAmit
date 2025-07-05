require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./router");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/api", router);

app.listen(process.env.API_PORT, () => {
  console.log(`Server running on port ${process.env.API_PORT}`);
});
