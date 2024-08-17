const express = require("express");
const router = express.Router();
router.post("/ecommerceData", (req, res) => {
  try {
   
    res.send([global.ecommerce_items,global.ecommerce_Category]);
  } catch (error) {
    res.send("Server Error");
  }
});
module.exports = router;
