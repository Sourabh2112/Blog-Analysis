const lodash = require("lodash");

module.exports = (req, res) => {
  const blogs = req.blogs;
  function searchBlogs(query) {
    if (query != 0) {
    const lowercaseQuery = query.toLowerCase();
    return lodash.filter(blogs, (blog) =>
      lodash.includes(blog.title.toLowerCase(), lowercaseQuery)
    );
    }else{
      res.json({
        message :"query is empty"
      })
    }
  }
  const query = req.query.query;
  const searchResults = searchBlogs(query);
  res.status(200).json({
    searchResults: searchResults,
  });
};
