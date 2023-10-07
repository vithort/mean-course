const express = require("express");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const PostController = require("../controllers/posts");

const router = express.Router();

router.post("", checkAuth, extractFile, PostController.postCreate);

router.put("/:id", checkAuth, extractFile, PostController.postUpdate);

router.get("", PostController.postsGetAll);

router.get("/:id", PostController.postsGetOne);

router.delete("/:id", checkAuth, PostController.postDelete);

module.exports = router;
