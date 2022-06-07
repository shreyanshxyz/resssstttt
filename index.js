import express from "express";
import bodyParser from "body-parser"; // allows us to take incoming post request body

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
