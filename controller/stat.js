const lodash = require("lodash");

module.exports = (req, res) => {
  // console.log("data retrived succefully");
  const blogs = req.blogs;
  try {
  // Calculate the total number of blogs fetched
  const blogSize = lodash.size(blogs);

  // Find the blog with the longest title
  const longestTitle = lodash.maxBy(blogs, (blog) => blog.title.length);

  // Determine the number of blogs with titles containing the word "privacy."
  const keyword = "privacy";
  const blogsWithPrivacy = lodash.filter(blogs, (blog) =>
    lodash.includes(blog.title.toLowerCase(), keyword.toLowerCase())
  );
  const numberOfBlogsWithPrivacy = lodash.size(blogsWithPrivacy);

  // Create an array of unique blog titles (no duplicates)
  const uniqueBlogTitles = lodash.uniqBy(blogs, "title").map((blog) => blog.title);
  

  res.status(200).json({
    longestTitle: longestTitle,
    blogSize: blogSize,
    numberOfBlogsWithPrivacy: numberOfBlogsWithPrivacy,
    uniqueBlogTitles: uniqueBlogTitles,
  });
  } catch (error) {
      res.json({
        message : err
      })
  }
};
