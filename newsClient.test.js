require("jest-fetch-mock").enableMocks();
const apiExampleDataWithImages = require("./apiExampleDataWithImages");
const NewsClient = require("./newsClient");
const client = new NewsClient();
const apiKey = require("./apiKey");

afterEach(() => {
  fetch.resetMocks();
});

it("loadTodaysHeadlines() retrieves todays article data from the API", () => {
  fetch.mockResponseOnce(JSON.stringify(apiExampleDataWithImages));
  const today = new Date("2 February 2023");
  client.loadTodaysHeadlines((data) => {
    expect(data.length).toBe(10);
    expect(data[0].webTitle).toBe("Everton v Arsenal: Premier League – live");
    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toBe(
      `https://content.guardianapis.com/search?from-date=2023-02-02&api-key=${apiKey}&show-fields=thumbnail`
    );
  }, today);
});
