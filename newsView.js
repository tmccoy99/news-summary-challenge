class NewsView {
  constructor(model) {
    this.model = model;
  }
  displayNews() {
    if (this.model.getNews().length === 0) {
      return;
    }
    const headlineEl = document.createElement("div");
    headlineEl.className = "headline";
    document.querySelector("#main_container").append(headlineEl);
  }
}
module.exports = NewsView;
