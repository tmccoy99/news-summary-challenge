class NewsClient {
  loadTodaysHeadlines() {
    return new Array(10).fill({
      webTitle:
        "Russia-Ukraine war live: EU to set up centre to prosecute crimes committed in Ukraine; UK rejects Johnson’s call to send fighter jets",
    });
  }
}

module.exports = NewsClient;
