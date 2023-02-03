class NewsView {
  constructor(model) {
    this.model = model;
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
}
module.exports = NewsView;
