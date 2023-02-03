class NewsModel {
  constructor() {
    this.savedNews = [];
  }

  getNews() {
    return this.savedNews;
  }

  setNews(results) {
    this.savedNews = results;
  }
}
module.exports = NewsModel;
