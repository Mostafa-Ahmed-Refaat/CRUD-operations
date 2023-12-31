const express = require("express");

const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:postId', postController.getPostById);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports=router;