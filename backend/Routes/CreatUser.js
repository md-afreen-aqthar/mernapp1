const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret= "Mynameisinend"
router.post("/createuser", async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, location, email, password } = req.body; // Extracting password from req.body

  const salt = await bcrypt.genSalt(10);
  let secPassword = await bcrypt.hash(password, salt); // Using the extracted password

  try {
    const newUser = await User.create({
      name,
      location,
      email,
      password: secPassword, // Storing the hashed password
    });

    res.json({ success: true, user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.json({ success: false, message: error.message });
  }
});

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    let email = req.body.email;

    try {
      const userData = await User.findOne({ email });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: " Try logging with correct credentials" });
      }


      const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: " Try logging with correct credentials" });
      }
const data={
  user:{
    id:userData.id

  }
}
const authToken=jwt.sign(data,jwtSecret)

      return res.json({ success: true,authToken:authToken});
 
    } 
    
    catch (error) {
      console.error(error);
      res.json({ success: false, message: error.message });
    }
  }
);

module.exports = router;
