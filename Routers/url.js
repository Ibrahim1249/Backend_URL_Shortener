const express = require("express");
const { handlePostUrl, handleGetUrl, handleSingleUrlAnalytic } = require("../Controllers/url");

const router = express.Router();

router.post("/" ,handlePostUrl);
router.get("/:shortId",handleGetUrl)
router.get("/analytic/:shortId",handleSingleUrlAnalytic)



module.exports = router