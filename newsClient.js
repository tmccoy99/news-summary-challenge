const apiKey = require("./apiKey");

class NewsClient {
  loadTodaysHeadlines(callback, today = new Date()) {
    const dateString = this.#generateDateString(today);
    fetch(
      `https://content.guardianapis.com/search?from-date=${dateString}&api-key=${apiKey}&show-fields=thumbnail`
    )
      .then((response) => response.json())
      .then((data) => callback(data.response.results));
  }

  #generateDateString(date) {
    const addZeroIfNeeded = (string) => {
      return string.length === 1 ? "0" + string : string;
    };
    const monthString = addZeroIfNeeded((date.getMonth() + 1).toString());
    const dayString = addZeroIfNeeded(date.getDate().toString());
    return `${date.getFullYear()}-${monthString}-${dayString}`;
  }
}

module.exports = NewsClient;
