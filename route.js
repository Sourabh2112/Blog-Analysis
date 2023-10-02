const express = require('express');
const blogs = require('./controller/middleware');
const stat = require('./controller/stat');
const search = require('./controller/search');
const router = express.Router();

router.get('/blog-stats',blogs, stat);

router.get('/blog-search',blogs, search);

module.exports = router