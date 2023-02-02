require("jest-fetch-mock").enableMocks();
const apiExampleData = require("./apiExampleData");
const NewsClient = require("./newsClient");
const client = new NewsClient();

it("loadTodaysHeadlines() retrieves todays article data from the API", () => {
  fetch.mockResponseOnce(JSON.stringify(apiExampleData));
  client.loadTodaysHeadlines((data) => {
    expect(data.length).toBe(10);
    expect(data[1].webTitle).toBe(
      "Russia-Ukraine war live: EU to set up centre to prosecute crimes committed in Ukraine; UK rejects Johnson’s call to send fighter jets"
    );
  });
});
