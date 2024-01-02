const express = require("express")
const router = express()

router.post("/post",require("../controllers/createSport").process )
router.get("/all",require("../controllers/getSport").process)
router.get("/single/:id", require("../controllers/specificSport").process)


module.exports = router