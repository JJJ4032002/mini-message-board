var express = require("express");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { messages: messages });
});

router.post("/new", function (req, res, next) {
  if (req.body.message !== "" && req.body.user !== "") {
    messages.push({
      text: req.body.message,
      user: req.body.user,
      added: new Date(),
    });
  }

  res.redirect("/");
});

module.exports = router;
