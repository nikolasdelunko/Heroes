const express = require("express");
const dotenv = require("dotenv");
let cors = require("cors");
const fileUpload = require("express-fileupload");
const heroesRouter = require("./api/heroes/index");
const uploadRouter = require("./api/photos/index")


dotenv.config();

const port = 8000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("static"));
app.use(express.static('public'));


app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(heroesRouter);
app.use(uploadRouter);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

