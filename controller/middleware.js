module.exports = async (req, res, next) => {
  const options = {
    method: "GET",
    headers: {
      "x-hasura-admin-secret":
        "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
    },
  };

  const url = "https://intent-kit-16.hasura.app/api/rest/blogs";

  try {
    const response = await fetch(url, options);
    const jsonResponse = await response.json();
    req.blogs = jsonResponse.blogs;
    next();
  } catch (err) {
    console.log("ERROR", err);
  }

  //   res.status(200).json({});
};
