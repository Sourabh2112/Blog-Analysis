const express = require('express');
const blogs = require('./controller/middleware');
const stat = require('./controller/stat');
const search = require('./controller/search');
const router = express.Router();

// router.get('/blog-stats',blogs, stat);

router.use(blogs)
router
.route('/blog-stats')
.get(stat)

// router.get('/blog-search',blogs, search);

router.use(blogs)
router
.route('/blog-search')
.get(search)

module.exports = router