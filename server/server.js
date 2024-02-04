import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const PORT = process.env.PORT || 8000;

Connection();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`Server up at ${PORT}`);
});
