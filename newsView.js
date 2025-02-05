class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
  }
  displayNews() {
    const headlines = this.model.getNews();
    for (const headline of headlines) {
      const divEl = this.#generateHeadlineDiv(headline);
      const anchorEl = this.#generateAnchor(headline);
      const imgEl = this.#generateThumbnailImg(headline);
      document.querySelector("#main_container").append(divEl, anchorEl, imgEl);
    }
  }

  async displayNewsFromApi() {
    this.client.loadTodaysHeadlines((results) => {
      this.model.setNews(results);
      this.displayNews();
    });
  }

  #generateHeadlineDiv(headline) {
    const divEl = document.createElement("div");
    divEl.className = "headline";
    divEl.textContent = headline.webTitle;
    return divEl;
  }

  #generateThumbnailImg(headline) {
    const thumbnailEl = document.createElement("img");
    thumbnailEl.src = headline.fields.thumbnail;
    return thumbnailEl;
  }

  #generateAnchor(headline) {
    const anchorEl = document.createElement("a");
    anchorEl.href = headline.webUrl;
    anchorEl.textContent = "View the full story here";
    return anchorEl;
  }
}
module.exports = NewsView;
