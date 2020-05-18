var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "Name should be atleast 3 Chars").isLength({ min: 3 }),
    check("email", "Incorrect mail").isEmail(),
    check("password")
      .isLength({ min: 3 })
      .withMessage("must be at least 5 chars long")
      .matches(/\d/)
      .withMessage("must contain a number"),
  ]
  ,
  signup
);

router.post(
  "/signin",
  [
    check("email", "Incorrect mail").isEmail(),
    check("password")
      .isLength({ min: 1 })
      .withMessage("Password field is required"),
  ]
  ,
  signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req,res) => {

  // res.send("A protected route");

  res.json(req.auth);
  

}); 

module.exports = router;
