let menu = {
    beverages: {
        drink1: {
            name: "Coca-Cola",
            img: "photo/coke.jpeg",
            size: {
                small: {
                    cup: 'Small',
                    price: 1.50
                },
                medium: {
                    cup: 'Medium',
                    price: 2.00
                },
                large: {
                    cup: 'Large',
                    price: 2.50
                }
            }
        },
        drink2: {
            name: "Sprite",
            img: "photo/sprite.jpeg",
            size: {
                small: {
                    cup: 'Small',
                    price: 1.50
                },
                medium: {
                    cup: 'Medium',
                    price: 2.00
                },
                large: {
                    cup: 'Large',
                    price: 2.50
                }
            }
        },
        drink3: {
            name: "Fanta Orange",
            img: "photo/fanta.jpeg",
            size: {
                small: {
                    cup: 'Small',
                    price: 1.50
                },
                medium: {
                    cup: 'Medium',
                    price: 2.00
                },
                large: {
                    cup: 'Large',
                    price: 2.50
                }
            }
        },
        drink4: {
            name: "Sweet Tea",
            img: "photo/sweettea.jpeg",
            size: {
                small: {
                    cup: 'Small',
                    price: 1.50
                },
                medium: {
                    cup: 'Medium',
                    price: 2.00
                },
                large: {
                    cup: 'Large',
                    price: 2.50
                }
            }
        }

    },
    dailySpecials: {
        special1: {
            name: "Crunchy Popcorn Shrimp Platter",
            img: "photo/popcornshrimp.png",
            description: "Bite-sized shrimp fried until golden brown. Served with cocktail sauce.",
            price: 15.99
        },
        special2: {
            name: "Lobster Lover's Dream",
            img: "photo/loverlobster.png",
            description: "Roasted rock and Maine lobster tails paired with lobster-and-shrimp linguini in a creamy lobster sauce. Served with choice of two sides.",
            price: 49.99
        },
        special3: {
            name: "Wild-Caught Snow Crab Legs",
            img: "photo/snowcrab.png",
            description: "Crack into tender, snow-white North American crabmeat. Served with lemon, melted butter and choice of two sides.",
            price: 18.99
        },
        special4: {
            name: "Shrimp Rangoon Platter",
            img: "photo/shrimprangoon.png",
            description: "24 crispy, crab-stuffed shrimp with sweet chili sauce. Includes one dozen Cheddar Bay Biscuits.",
            price: 15.99
        }

    },
    entrees: {
        entree1: {
            name: "Live Maine Lobster",
            img: "photo/mainelobster.png",
            description: "Wild-caught, fresh from the Atlantic. Prepared to order in the classic style or roasted with crab-and-seafood stuffing. Served with choice of two sides.",
            price: 19.99
        },
        entree2: {
            name: "10 Oz. New York Strip",
            img: "photo/nystrip.png",
            description: "Simply grilled with a peppercorn seasoning. Served with choice of two sides.",
            price: 19.99
        },
        entree3: {
            name: "7 Oz. Sirloin",
            img: "photo/sirloin.png",
            description: "Simply seasoned with peppercorn. Served with choice of two sides.",
            price: 18.99
        },
        entree4: {
            name: "Garlic Shrimp Skewers",
            img: "photo/garlicshrimp.png",
            description: "Two grilled shrimp skewers with a butter garlic glaze. Served with lemon and choice of two sides.",
            price: 16.99
        }

    },
    kids: {
        kid1: {
            name: "Garlic-Grill Shrimp",
            img: "photo/grillshrimp.png",
            description: "Served with choice of side.",
            price: 9.99
        },
        kid2: {
            name: "Popcorn Shrimp",
            img: "photo/kidpopshrimp.png",
            description: "Served with ketchup and choice of side.",
            price: 9.99
        },
        kid3: {
            name: "Macaroni & Cheese",
            img: "photo/macaroni.png",
            description: "Served with choice of side.",
            price: 8.99
        },
        kid4: {
            name: "Chicken Tenders",
            img: "photo/tenders.png",
            description: "Served with honey mustard and choice of side.",
            price: 8.99
        }

    },
    appetizers: {
        app1: {
            name: "Mozzarella Cheesesticks",
            img: "photo/mozzarella.png",
            description: "Served with marinara",
            price: 7.99
        },
        app2: {
            name: "Hand-Breaded Calamari",
            img: "photo/calamari.png",
            description: "Golden-fried calamari served with jalapeño ranch and marinara.",
            price: 9.99
        },
        app3: {
            name: "Parrot Isle Jumbo Coconut Shrimp Appetizer",
            img: "photo/cocoshrimp.png",
            description: "Dunk in our signature piña colada sauce.",
            price: 8.99
        },
        app4: {
            name: "Crab-Stuffed Shrimp Rangoon",
            img: "photo/crabshrimp.png",
            description: "Crispy, crab-stuffed shrimp with sweet chili sauce.",
            price: 8.99
        }

    },
    desserts: {
        dessert1: {
            name: "Vanilla Bean Cheesecake",
            img: "photo/vanillacheese.png",
            description: "Layered with sweet Italian cream on a vanilla cookie crust, with vanilla bean-infused whipped cream and white chocolate shavings.",
            price: 6.99
        },
        dessert2: {
            name: "Chocolate Wave",
            img: "photo/chocowave.png",
            description: "Layers of warm, decadent chocolate cake and creamy fudge frosting. Served with vanilla ice cream and rich chocolate sauce.",
            price: 6.99
        },
        dessert3: {
            name: "Brownie Overboard",
            img: "photo/brownie.png",
            description: "Warm brownie wedges served with a scoop of vanilla ice cream. Topped with caramel, fudge, and whipped cream.",
            price: 6.99
        },
        dessert4: {
            name: "Whole Desserts",
            img: "photo/wholecake.png",
            description: "Choose from Chocolate Wave, Vanilla Bean Cheesecake, Meyer Lemon Cake or Triple-Chocolate Brownie.",
            price: 15.99
        }

    }
}

const featured = document.querySelector('#featured')
const appetizers = document.querySelector('#appetizers')
const specials = document.querySelector('#specials')
const entrees = document.querySelector('#entrees')
const kids = document.querySelector('#kids')
const desserts = document.querySelector('#desserts')
const beverages = document.querySelector('#beverages')

featured.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Featured Favorites'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.dailySpecials.special2.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.dailySpecials.special2.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.dailySpecials.special2.description
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.dailySpecials.special2.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.dailySpecials.special1.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.dailySpecials.special1.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.dailySpecials.special1.description
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.dailySpecials.special1.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.entrees.entree2.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.entrees.entree2.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.entrees.entree2.description
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.entrees.entree2.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.appetizers.app4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.appetizers.app4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.appetizers.app4.description
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.appetizers.app4.price

})

appetizers.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Appetizers'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.appetizers.app1.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.appetizers.app1.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.appetizers.app1.description
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.appetizers.app1.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.appetizers.app2.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.appetizers.app2.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.appetizers.app2.description
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.appetizers.app2.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.appetizers.app3.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.appetizers.app3.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.appetizers.app3.description
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.appetizers.app3.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.appetizers.app4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.appetizers.app4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.appetizers.app4.description
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.appetizers.app4.price

})

specials.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Daily Specials'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.dailySpecials.special1.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.dailySpecials.special1.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.dailySpecials.special1.description
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.dailySpecials.special1.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.dailySpecials.special2.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.dailySpecials.special2.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.dailySpecials.special2.description
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.dailySpecials.special2.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.dailySpecials.special3.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.dailySpecials.special3.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.dailySpecials.special3.description
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.dailySpecials.special3.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.dailySpecials.special4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.dailySpecials.special4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.dailySpecials.special4.description
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.dailySpecials.special4.price

})

entrees.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Entrees'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.entrees.entree1.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.entrees.entree1.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.entrees.entree1.description
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.entrees.entree1.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.entrees.entree2.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.entrees.entree2.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.entrees.entree2.description
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.entrees.entree2.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.entrees.entree3.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.entrees.entree3.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.entrees.entree3.description
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.entrees.entree3.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.entrees.entree4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.entrees.entree4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.entrees.entree4.description
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.entrees.entree4.price

})

kids.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Kids'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.kids.kid1.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.kids.kid1.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.kids.kid1.description
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.kids.kid1.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.kids.kid2.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.kids.kid2.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.kids.kid2.description
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.kids.kid2.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.kids.kid3.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.kids.kid3.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.kids.kid3.description
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.kids.kid3.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.kids.kid4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.kids.kid4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.kids.kid4.description
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.kids.kid4.price

})

desserts.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Desserts'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.desserts.dessert1.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.desserts.dessert1.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.desserts.dessert1.description
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.desserts.dessert1.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.desserts.dessert2.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.desserts.dessert2.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.desserts.dessert2.description
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.desserts.dessert2.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.desserts.dessert3.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.desserts.dessert3.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.desserts.dessert3.description
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.desserts.dessert3.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.desserts.dessert4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.desserts.dessert4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.desserts.dessert4.description
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.desserts.dessert4.price

})

beverages.addEventListener('click', (e)=> {
    let subtitle = document.querySelector('h3')
    subtitle.innerHTML = 'Beverages'

    let image1 = document.querySelector('#spot1Pic')
    image1.setAttribute('src', menu.beverages.drink1.img)
    let title1 = document.querySelector("#spot1Title")
    title1.innerHTML = menu.beverages.drink1.name
    let sum1 = document.querySelector("#spot1Sum")
    sum1.innerHTML = menu.beverages.drink1.size.small.cup
    let price1 = document.querySelector("#spot1Price")
    price1.innerHTML = '$'+menu.beverages.drink1.size.small.price

    let image2 = document.querySelector('#spot2Pic')
    image2.setAttribute('src', menu.beverages.drink2.img)
    let title2 = document.querySelector("#spot2Title")
    title2.innerHTML = menu.beverages.drink2.name
    let sum2 = document.querySelector("#spot2Sum")
    sum2.innerHTML = menu.beverages.drink2.size.small.cup
    let price2 = document.querySelector("#spot2Price")
    price2.innerHTML = '$'+menu.beverages.drink2.size.small.price

    let image3 = document.querySelector('#spot3Pic')
    image3.setAttribute('src', menu.beverages.drink3.img)
    let title3 = document.querySelector("#spot3Title")
    title3.innerHTML = menu.beverages.drink3.name
    let sum3 = document.querySelector("#spot3Sum")
    sum3.innerHTML = menu.beverages.drink3.size.small.cup
    let price3 = document.querySelector("#spot3Price")
    price3.innerHTML = '$'+menu.beverages.drink3.size.small.price

    let image4 = document.querySelector('#spot4Pic')
    image4.setAttribute('src', menu.beverages.drink4.img)
    let title4 = document.querySelector("#spot4Title")
    title4.innerHTML = menu.beverages.drink4.name
    let sum4 = document.querySelector("#spot4Sum")
    sum4.innerHTML = menu.beverages.drink4.size.small.cup
    let price4 = document.querySelector("#spot4Price")
    price4.innerHTML = '$'+menu.beverages.drink4.size.small.price

})
