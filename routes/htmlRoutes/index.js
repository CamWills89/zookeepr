const path = require("path");
const router = require("express").Router();
//serves the routes linking the HTML, CSS and JS files
//the '/' route points us to the root route
//of the server to crea the the homepage for a server
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});

module.exports = router;
