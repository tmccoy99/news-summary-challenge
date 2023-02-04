class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
  }
  displayNews() {
    const headlines = this.model.getNews();
    for (const headline of headlines) {
      const textEl = document.createElement("div");
      textEl.className = "headline";
      textEl.textContent = headline.webTitle;
      if (headline.fields) {
        const thumbnailEl = document.createElement("img");
        thumbnailEl.src = headline.fields.thumbnail;
        document.querySelector("#main_container").append(textEl, thumbnailEl);
        continue;
      }
      document.querySelector("#main_container").append(textEl);
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
