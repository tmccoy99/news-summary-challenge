/**
 * @jest-environment jsdom
 */
const fs = require("fs");
require("jest-fetch-mock").enableMocks();
const NewsView = require("./newsView");
const apiExampleData = require("./apiExampleData");

describe("Testing display of the day's news", () => {
  let mockModel;
  let newsView;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    mockModel = { getNews: jest.fn() };
    newsView = new NewsView(mockModel);
  });

  it("With no news set in model, displayNews() adds no headlines to page", () => {
    mockModel.getNews.mockReturnValueOnce([]);
    newsView.displayNews();
    expect(document.querySelector("div.headline")).toBeNull();
  });

  it("With news set in model, displayNews() adds div.headline elements to the page", () => {
    mockModel.getNews.mockReturnValueOnce(apiExampleData.response.results);
    newsView.displayNews();
    expect(document.querySelector("div.headline")).not.toBeNull();
  });

  it("With news set in model, displayNews() adds div.headline element with correct textContent for each headline", () => {
    mockModel.getNews.mockReturnValueOnce(apiExampleData.response.results);
    newsView.displayNews();
    const headlines = document.querySelectorAll("div.headline");
    expect(headlines.length).toBe(10);
    expect(headlines[1].textContent).toBe(
      "Russia-Ukraine war live: EU to set up centre to prosecute crimes committed in Ukraine; UK rejects Johnson’s call to send fighter jets"
    );
    expect(headlines[2].textContent).toBe(
      "King Kazu’s astonishing longevity and a new move to Portugal"
    );
  });
});
