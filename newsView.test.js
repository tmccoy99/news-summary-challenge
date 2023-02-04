/**
 * @jest-environment jsdom
 */
const fs = require("fs");
require("jest-fetch-mock").enableMocks();
const NewsView = require("./newsView");
const apiExampleData = require("./apiExampleData");
const apiExampleDataWithImages = require("./apiExampleDataWithImages");

describe("Testing display of the day's news", () => {
  let mockModel;
  let mockClient;
  let newsView;
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    mockModel = { getNews: jest.fn(), setNews: jest.fn() };
    mockClient = { loadTodaysHeadlines: jest.fn() };
    newsView = new NewsView(mockModel, mockClient);
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

  it("With news set in model, displayNews() adds img element with each headline", () => {
    mockModel.getNews.mockReturnValueOnce(
      apiExampleDataWithImages.response.results
    );
    newsView.displayNews();
    const images = document.querySelectorAll("img");
    expect(images.length).toBe(10);
    expect(images[0].src).toBe(
      "https://media.guim.co.uk/a161ccf4f03c3c338a1b9378e39df35aff31d5fa/5_460_5419_3252/500.jpg"
    );
  });

  // it("With news set in model, displayNews() headline elements are hyperlinks", () => {
  //   mockModel.getNews.mockReturnValueOnce(
  //     apiExampleDataWithImages.response.results
  //   );
  //   newsView.displayNews();
  //   const headlines = document.querySelectorAll("div.headline");
  //   expect(headlines.length).toBe(10);
  //   expect(
  //     (headlines[0].href =
  //       "https://www.theguardian.com/football/live/2023/feb/04/everton-v-arsenal-premier-league-live-score-updates")
  //   );
  // });

  it("displayNewsFromApi() method loads data from API then displays headlines", () => {
    mockClient.loadTodaysHeadlines.mockImplementationOnce((callback) =>
      callback(apiExampleData.response.results)
    );

    mockModel.getNews.mockReturnValueOnce(apiExampleData.response.results);
    newsView.displayNewsFromApi().then(() => {
      const headlines = document.querySelectorAll("div.headline");
      expect(headlines.length).toBe(10);
      expect(headlines[1].textContent).toBe(
        "Russia-Ukraine war live: EU to set up centre to prosecute crimes committed in Ukraine; UK rejects Johnson’s call to send fighter jets"
      );
      expect(headlines[2].textContent).toBe(
        "King Kazu’s astonishing longevity and a new move to Portugal"
      );
      expect(mockClient.loadTodaysHeadlines).toHaveBeenCalled();
      expect(mockModel.setNews).toHaveBeenCalledWith(
        apiExampleData.response.results
      );
    });
  });
});
