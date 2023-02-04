/**
 * @jest-environment jsdom
 */
const fs = require("fs");
require("jest-fetch-mock").enableMocks();
const NewsView = require("./newsView");
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
    mockModel.getNews.mockReturnValueOnce(
      apiExampleDataWithImages.response.results
    );
    newsView.displayNews();
    expect(document.querySelector("div.headline")).not.toBeNull();
  });

  it("With news set in model, displayNews() adds div.headline element with correct textContent for each headline", () => {
    mockModel.getNews.mockReturnValueOnce(
      apiExampleDataWithImages.response.results
    );
    newsView.displayNews();
    const headlines = document.querySelectorAll("div.headline");
    expect(headlines.length).toBe(10);
    expect(headlines[1].textContent).toBe(
      "Russia-Ukraine war live: more than 100 soldiers returned to Kyiv in prisoner exchange"
    );
    expect(headlines[2].textContent).toBe(
      "Sunak ‘aims to stop deportation appeals’ for people who reach UK in small boats"
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

  it("With news set in model, displayNews() adds img element with each headline", () => {
    mockModel.getNews.mockReturnValueOnce(
      apiExampleDataWithImages.response.results
    );
    newsView.displayNews();
    anchors = document.querySelectorAll("a");
    expect(anchors.length).toBe(10);
    expect(anchors[5].textContent).toBe("View the full story here");
    expect(anchors[0].href).toBe(
      "https://www.theguardian.com/football/live/2023/feb/04/everton-v-arsenal-premier-league-live-score-updates"
    );
  });

  it("displayNewsFromApi() method loads data from API then displays headlines", () => {
    mockClient.loadTodaysHeadlines.mockImplementationOnce((callback) =>
      callback(apiExampleDataWithImages.response.results)
    );

    mockModel.getNews.mockReturnValueOnce(
      apiExampleDataWithImages.response.results
    );
    newsView.displayNewsFromApi().then(() => {
      const headlines = document.querySelectorAll("div.headline");
      expect(headlines.length).toBe(10);
      expect(headlines[1].textContent).toBe(
        "Russia-Ukraine war live: more than 100 soldiers returned to Kyiv in prisoner exchange"
      );
      expect(headlines[2].textContent).toBe(
        "Sunak ‘aims to stop deportation appeals’ for people who reach UK in small boats"
      );
      expect(mockClient.loadTodaysHeadlines).toHaveBeenCalled();
      expect(mockModel.setNews).toHaveBeenCalledWith(
        apiExampleDataWithImages.response.results
      );
    });
  });
});
