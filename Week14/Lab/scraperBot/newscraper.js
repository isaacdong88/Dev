const axios = require("axios");
const cheerio = require("cheerio");

const amazonScraper = {
  newRelease: {
    electronics:
      "https://www.amazon.com/gp/new-releases/electronics/ref=zg_bsnr_nav_0",
    appliances:
      "https://www.amazon.com/gp/new-releases/appliances/ref=zg_bsnr_nav_0",
  },
};

const getProducts = async (url) => {
  const siteData = await axios.get(url);
  //   console.log(siteData);
  const info = siteData.data;
  //---using cheerio
  const $ = cheerio.load(info);
  //   console.log($);
  const $selected = $(".zg-grid-general-faceout"); //All relavent batched data next is parsing the data
  //   console.log($selected);
  //   $selected.find(".product-card__link-overlay");

  for (const card of $selected) {
    const product = {
      // name: $(card).find(".product-card__link-overlay").text(),
      name: $(card).find("._cDEzb_p13n-sc-css-line-clamp-3_g3dy1").text(),
      link: `https://www.amazon.com/${$(card).find("a").attr("href")}`,
      price: $(card).find("._cDEzb_p13n-sc-price_3mJ9Z").text(),
    };

    console.log(product);
  }
};

for (const key in amazonScraper.newRelease) {
  getProducts(amazonScraper.newRelease[key]);
}

//   for (site of majorScraper.jordans) {
//     getMeSneakers(site);
//   }

// getProducts(amazonScraper.newRelease.electronics);
