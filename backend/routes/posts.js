const express = require("express");
const multer = require("multer");

const checkAuth = require("../middleware/check-auth");

const PostController = require("../controllers/posts");

const router = express.Router();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLocaleLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});

router.post(
  "",
  checkAuth,
  multer({ storage: storage }).single("image"),
  PostController.postCreate
);

router.put(
  "/:id",
  checkAuth,
  multer({ storage: storage }).single("image"),
  PostController.postUpdate
);

router.get("", PostController.postsGetAll);

router.get("/:id", PostController.postsGetOne);

router.delete("/:id", checkAuth, PostController.postDelete);

module.exports = router;
