const apiExampleData = {
  response: {
    status: "ok",
    userTier: "developer",
    total: 139,
    startIndex: 1,
    pageSize: 10,
    currentPage: 1,
    pages: 14,
    orderBy: "newest",
    results: [
      {
        id: "uk-news/2023/feb/02/prosecutors-drop-alleged-case-against-mason-greenwood",
        type: "article",
        sectionId: "uk-news",
        sectionName: "UK news",
        webPublicationDate: "2023-02-02T15:48:45Z",
        webTitle:
          "Prosecutors drop attempted rape case against Mason Greenwood",
        webUrl:
          "https://www.theguardian.com/uk-news/2023/feb/02/prosecutors-drop-alleged-case-against-mason-greenwood",
        apiUrl:
          "https://content.guardianapis.com/uk-news/2023/feb/02/prosecutors-drop-alleged-case-against-mason-greenwood",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "world/live/2023/feb/02/russia-ukraine-war-live-kyiv-warns-of-russian-mobilisation-on-eastern-border-kramatorsk-apartment-block-attack-kills-three",
        type: "liveblog",
        sectionId: "world",
        sectionName: "World news",
        webPublicationDate: "2023-02-02T15:47:04Z",
        webTitle:
          "Russia-Ukraine war live: EU to set up centre to prosecute crimes committed in Ukraine; UK rejects Johnson’s call to send fighter jets",
        webUrl:
          "https://www.theguardian.com/world/live/2023/feb/02/russia-ukraine-war-live-kyiv-warns-of-russian-mobilisation-on-eastern-border-kramatorsk-apartment-block-attack-kills-three",
        apiUrl:
          "https://content.guardianapis.com/world/live/2023/feb/02/russia-ukraine-war-live-kyiv-warns-of-russian-mobilisation-on-eastern-border-kramatorsk-apartment-block-attack-kills-three",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "football/2023/feb/02/football-daily-email-king-kazu",
        type: "article",
        sectionId: "football",
        sectionName: "Football",
        webPublicationDate: "2023-02-02T15:45:05Z",
        webTitle:
          "King Kazu’s astonishing longevity and a new move to Portugal",
        webUrl:
          "https://www.theguardian.com/football/2023/feb/02/football-daily-email-king-kazu",
        apiUrl:
          "https://content.guardianapis.com/football/2023/feb/02/football-daily-email-king-kazu",
        isHosted: false,
        pillarId: "pillar/sport",
        pillarName: "Sport",
      },
      {
        id: "business/live/2023/feb/02/bank-of-england-interest-rates-inflation-recession-growth-business-live",
        type: "liveblog",
        sectionId: "business",
        sectionName: "Business",
        webPublicationDate: "2023-02-02T15:39:19Z",
        webTitle:
          "Bank of England says inflation likely to have peaked amid split over interest rate rise to 4% – business live",
        webUrl:
          "https://www.theguardian.com/business/live/2023/feb/02/bank-of-england-interest-rates-inflation-recession-growth-business-live",
        apiUrl:
          "https://content.guardianapis.com/business/live/2023/feb/02/bank-of-england-interest-rates-inflation-recession-growth-business-live",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "us-news/live/2023/feb/02/biden-police-reform-black-caucus-tyre-nichols-death-politics-latest-updates",
        type: "liveblog",
        sectionId: "us-news",
        sectionName: "US news",
        webPublicationDate: "2023-02-02T15:38:54Z",
        webTitle:
          "Biden to discuss police reform with Black lawmakers in wake of Tyre Nichols’ death – latest",
        webUrl:
          "https://www.theguardian.com/us-news/live/2023/feb/02/biden-police-reform-black-caucus-tyre-nichols-death-politics-latest-updates",
        apiUrl:
          "https://content.guardianapis.com/us-news/live/2023/feb/02/biden-police-reform-black-caucus-tyre-nichols-death-politics-latest-updates",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "tv-and-radio/2023/feb/02/power-slap-is-this-the-most-stomach-churning-reality-tv-show-ever",
        type: "article",
        sectionId: "tv-and-radio",
        sectionName: "Television & radio",
        webPublicationDate: "2023-02-02T15:34:15Z",
        webTitle:
          "Power Slap: is this the most stomach-churning reality TV show ever?",
        webUrl:
          "https://www.theguardian.com/tv-and-radio/2023/feb/02/power-slap-is-this-the-most-stomach-churning-reality-tv-show-ever",
        apiUrl:
          "https://content.guardianapis.com/tv-and-radio/2023/feb/02/power-slap-is-this-the-most-stomach-churning-reality-tv-show-ever",
        isHosted: false,
        pillarId: "pillar/arts",
        pillarName: "Arts",
      },
      {
        id: "politics/live/2023/feb/02/labour-tories-windfall-tax-shell-profits-energy-prices-strikes-uk-politics-live",
        type: "liveblog",
        sectionId: "politics",
        sectionName: "Politics",
        webPublicationDate: "2023-02-02T15:17:19Z",
        webTitle:
          "Labour renews call for ‘proper’ windfall tax as Shell declares record £32.2bn profit – UK politics live",
        webUrl:
          "https://www.theguardian.com/politics/live/2023/feb/02/labour-tories-windfall-tax-shell-profits-energy-prices-strikes-uk-politics-live",
        apiUrl:
          "https://content.guardianapis.com/politics/live/2023/feb/02/labour-tories-windfall-tax-shell-profits-energy-prices-strikes-uk-politics-live",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "media/2023/feb/02/why-rumours-of-radio-2-demise-might-be-overstated-steve-wright-vanessa-feltz-ken-bruce",
        type: "article",
        sectionId: "media",
        sectionName: "Media",
        webPublicationDate: "2023-02-02T15:01:40Z",
        webTitle: "Why rumours of BBC Radio 2’s demise might be overstated",
        webUrl:
          "https://www.theguardian.com/media/2023/feb/02/why-rumours-of-radio-2-demise-might-be-overstated-steve-wright-vanessa-feltz-ken-bruce",
        apiUrl:
          "https://content.guardianapis.com/media/2023/feb/02/why-rumours-of-radio-2-demise-might-be-overstated-steve-wright-vanessa-feltz-ken-bruce",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "science/2023/feb/02/pioneering-nhs-trial-targets-brain-tumours-before-surgery-radiotherapy",
        type: "article",
        sectionId: "science",
        sectionName: "Science",
        webPublicationDate: "2023-02-02T15:00:04Z",
        webTitle: "Pioneering NHS trial targets brain tumours before surgery",
        webUrl:
          "https://www.theguardian.com/science/2023/feb/02/pioneering-nhs-trial-targets-brain-tumours-before-surgery-radiotherapy",
        apiUrl:
          "https://content.guardianapis.com/science/2023/feb/02/pioneering-nhs-trial-targets-brain-tumours-before-surgery-radiotherapy",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
      },
      {
        id: "music/2023/feb/02/harpsichord-concertos-martinu-krasa-and-kalabis-review-esfahani-makes-sparks-fly-as-ancient-meets-modern",
        type: "article",
        sectionId: "music",
        sectionName: "Music",
        webPublicationDate: "2023-02-02T15:00:04Z",
        webTitle:
          "Harpsichord Concertos: Martinů, Krása and Kalabis review | classical album of the week",
        webUrl:
          "https://www.theguardian.com/music/2023/feb/02/harpsichord-concertos-martinu-krasa-and-kalabis-review-esfahani-makes-sparks-fly-as-ancient-meets-modern",
        apiUrl:
          "https://content.guardianapis.com/music/2023/feb/02/harpsichord-concertos-martinu-krasa-and-kalabis-review-esfahani-makes-sparks-fly-as-ancient-meets-modern",
        isHosted: false,
        pillarId: "pillar/arts",
        pillarName: "Arts",
      },
    ],
  },
};
console.log(apiExampleData.response.results);
module.exports = apiExampleData;
