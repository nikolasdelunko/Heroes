const express = require("express");
const router = express.Router();

const { postUpload } = require("./post.hendlers");

router.post("/api/upload", postUpload);

module.exports = router;