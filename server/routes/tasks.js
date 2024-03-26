const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "get all" });
});
router.get("/login", () => {});

router.post("/:id");

module.exports = router;
// module is a special object available in Node.js that represents the current module.
// When you write a JavaScript file in Node.js, that file is treated as a module.
// The module.exports property is used to export values from a module so that they can be imported and used in other modules.

// module.exports:
// module.exports is an object that is used to export values from a module.
// By default, module.exports is an empty object {}.
