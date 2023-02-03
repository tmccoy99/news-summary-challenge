class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
  }
  displayNews() {
    const headlines = this.model.getNews();
    for (const headline of headlines) {
      const headlineEl = document.createElement("div");
      headlineEl.className = "headline";
      headlineEl.textContent = headline.webTitle;
      document.querySelector("#main_container").append(headlineEl);
    }
  }

  async displayNewsFromApi() {
    this.client.loadTodaysHeadlines((results) => {
      this.model.setNews(results);
      this.displayNews();
    });
  }
}
module.exports = NewsView;
