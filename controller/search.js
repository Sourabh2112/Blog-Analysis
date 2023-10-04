const lodash = require("lodash");

module.exports = (req, res) => {
  const blogs = req.blogs;
  function searchBlogs(query) {
    const lowercaseQuery = query.toLowerCase();
    return lodash.filter(blogs, (blog) =>
      lodash.includes(blog.title.toLowerCase(), lowercaseQuery)
    );
  }
  const query = req.query.query;
  const searchResults = searchBlogs(query);
  res.status(200).json({
    searchResults: searchResults,
  });
};
