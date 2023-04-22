//Bring in dependencies

const axios = require("axios");
const cheerio = require("cheerio"); //also pupeteer and nokgiri(can work with Mechanize) other data scraping tools

//Step to scraping Data Properly
//-----1.Know and understand what data you want
//----------JSON?, XML?, Numbers/Object

//-----2. Investigate the Structure of the application/site

//Make data as robust as possible
const majorScraper = {
  nike: {
    types: {
      basketball: {},
      lifestlye: {},
    },
  },
  champs: {},
  goat: {},
  jordans: [
    "https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok",
    "https://www.nike.com/w/womens-jordan-shoes-37eefz5e1x6zy7ok",
    "https://www.nike.com/w/kids-jordan-shoes-37eefzv4dhzy7ok",
  ],
};

let nike_selector = ".product-card__link-overlay";
const sneakerContainer = [];

//--------------------------The Goodie

//Make an async function --> while finding data, give me the data
//
const getMeSneakers = async (url) => {
  const siteData = await axios.get(url);
  //   console.log(siteData);
  const info = siteData.data;
  //---using cheerio
  const $ = cheerio.load(info);
  //   console.log($);
  const $selected = $(".product-card"); //All relavent batched data next is parsing the data
  //   console.log($selected);
  //   $selected.find(".product-card__link-overlay");

  for (const card of $selected) {
    const shoebox = {
      name: $(card).find(".product-card__link-overlay").text(),
      links: $(card).find("a").attr("href"),
      // price: $(card).find(".product-price").text(),
    };
    //   if (shoebox.price.length > 7) {
    //     shoebox.price = "Check on site";
    //   }

    console.log(shoebox);
  }
};

// for (site of majorScraper.jordans) {
//   getMeSneakers(site);
// }

getMeSneakers(majorScraper.jordans[0]);
