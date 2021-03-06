import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();


app.use(bodyParser.json({limit: "30m", extended: true}));
app.use(bodyParser.urlencoded({limit: "30m", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

// CONNECT TO MongoDB
const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.32oec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}.`)))
.catch((error) => console.log(error.message));

