require("dotenv").config();
const axions = require("axios");

module.exports = async (query, variables) => {
  const result = await axions({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  });

  return result.data;
};
