const NewsModel = require("./newsModel");
const apiExampleData = require("./apiExampleData");

describe("Testing of setting and getting news items", () => {
  let newsModel;
  beforeEach(() => {
    newsModel = new NewsModel();
  });

  it("Before news is set, getNews() returns an empty array", () => {
    expect(newsModel.getNews()).toStrictEqual([]);
  });

  it("After setting news, getNews() returns an array of results", () => {
    newsModel.setNews(apiExampleData.response.results);
    expect(newsModel.getNews()).toStrictEqual(apiExampleData.response.results);
  });
});
