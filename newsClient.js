const apiKey = require("./apiKey");

class NewsClient {
  loadTodaysHeadlines(callback) {
    fetch(
      `https://content.guardianapis.com/search?from-date=2023-02-02&api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => callback(data.response.results));
  }
}

module.exports = NewsClient;
