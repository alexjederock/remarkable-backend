import express from 'express';

const nlrouter = express.Router();

nlrouter.get('/', function (req, res) {
  // res.send('Hello from APIv1 root route.');
  res.json(getMockNewsletters())
});

// nlrouter.get('/users', function(req, res) {
//   res.send('List of APIv1 users.');
// });

export default nlrouter;


function getMockNewsletters() {
  return [{
    id: "TmV3c2xldHRlckNvbmZpZzpOTg==",
    newsletterId: "NN",
    slug: "morning-briefing",
    title: "The Morning",
    caption:
      "Make sense of the day’s news and ideas. David Leonhardt and Times journalists guide you through what’s happening — and why it matters.",
    frequency: "Daily",
    altText: "the morning newsletter",
    sampleUrl: "https://static.nytimes.com/email-content/NN_sample.html",
    thumbImageUrl:
      "https://static.nytimes.com/email-images/newsletters/TheMorning/TheMorning-Icon.png",
    __typename: "NewsletterConfig",
  },
  {
    id: "TmV3c2xldHRlckNvbmZpZzpDQg==",
    newsletterId: "CB",
    slug: "coronavirus-briefing",
    title: "Coronavirus Briefing",
    caption:
      "An informed guide to the global outbreak, with the latest developments and expert advice about prevention and treatment.",
    frequency: "Weekdays",
    altText: "Coronavirus Briefing",
    sampleUrl: "https://static.nytimes.com/email-content/CB_sample.html",
    thumbImageUrl:
      "https://static.nytimes.com/email-images/newsletters/coronavirus-briefing/NYT-CoronavirsuBriefing-Icon.png",
    __typename: "NewsletterConfig",
  },
  {
    id: "TmV3c2xldHRlckNvbmZpZzpDSw==",
    newsletterId: "CK",
    slug: "cooking",
    title: "Cooking",
    caption:
      "Feast on recipes, food writing and culinary inspiration from Sam Sifton and NYT Cooking.",
    frequency: "Five Times a Week",
    altText: "cooking newsletter",
    sampleUrl: "https://static.nytimes.com/email-content/CK_sample.html",
    thumbImageUrl:
      "https://static01.nyt.com/email-images/Newsletter%20Icons/Cooking.png",
    __typename: "NewsletterConfig",
  },
  {
    id: "TmV3c2xldHRlckNvbmZpZzpOTg==",
    newsletterId: "NN",
    slug: "morning-briefing",
    title: "The Morning",
    caption:
      "Make sense of the day’s news and ideas. David Leonhardt and Times journalists guide you through what’s happening — and why it matters.",
    frequency: "Daily",
    altText: "the morning newsletter",
    sampleUrl: "https://static.nytimes.com/email-content/NN_sample.html",
    thumbImageUrl:
      "https://static.nytimes.com/email-images/newsletters/TheMorning/TheMorning-Icon.png",
    __typename: "NewsletterConfig",
  },
  {
    id: "TmV3c2xldHRlckNvbmZpZzpDQg==",
    newsletterId: "CB",
    slug: "coronavirus-briefing",
    title: "Coronavirus Briefing",
    caption:
      "An informed guide to the global outbreak, with the latest developments and expert advice about prevention and treatment.",
    frequency: "Weekdays",
    altText: "Coronavirus Briefing",
    sampleUrl: "https://static.nytimes.com/email-content/CB_sample.html",
    thumbImageUrl:
      "https://static.nytimes.com/email-images/newsletters/coronavirus-briefing/NYT-CoronavirsuBriefing-Icon.png",
    __typename: "NewsletterConfig",
  }]
}