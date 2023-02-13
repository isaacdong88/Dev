let holiday = {
    vday: {
        logo: 'https://cdn3.vectorstock.com/i/1000x1000/15/37/valentines-day-vintage-heart-logo-on-white-vector-19411537.jpg',
        text: "Image result for valentine's day It originated as a Christian feast day honoring one or two early Christian martyrs named Saint Valentine and, through later folk traditions, has become a significant cultural, religious, and commercial celebration of romance and love in many regions of the world. Valentine's Day.",
        img: 'https://www.creativefabrica.com/wp-content/uploads/2019/12/19/Happy-valentines-day-cupid-or-angel-logo-Graphics-1-16.jpg',
        bgColor: 'pink'
    },
    christmas: {
        logo: 'https://cdn5.vectorstock.com/i/1000x1000/68/64/merry-christmas-logo-with-christmas-bells-vector-34746864.jpg',
        text: "Because Christmas is about the birth of God's Son  Jesus. It is about how he came to give us love, hope and joy. That message doesn't change from year to year. When there is so much bad news and devastation in the world, this is good news worth celebrating!",
        img: 'https://us.123rf.com/450wm/creativica/creativica1912/creativica191200006/creativica191200006.jpg?ver=6',
        bgColor: 'green'
    },
    thnxG: {
        logo: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/happy-thanksgiving-day-template-design-4caa053c353db53a3fdf39dc03f30608_screen.jpg?ts=1637786999',
        text: "In 1621, the Plymouth colonists and the Wampanoag shared an autumn harvest feast that is acknowledged today as one of the first Thanksgiving celebrations in the colonies. For more than two centuries, days of thanksgiving were celebrated by individual colonies and states.",
        img: 'https://img.freepik.com/free-vector/thanksgiving-day-logo-design_1057-595.jpg',
        bgColor: 'orange'
    }
}





const updatesite = (obj)=>{
    // changeImg
    let newImg = document.querySelector('.mainPic')
    // target Original Image
    let updatedImg = document.createElement('img')
    // create new Image
    updatedImg.setAttribute('src',holiday[obj].img)
    updatedImg.setAttribute('class','mainPic')
    // updateSRC
    newImg.replaceWith(updatedImg)
    // --------------------------------------------------------{Step1}

    // para
    let newTxt = document.querySelector('.para')
    // newTxt.innerHTML = 
    // logo
    let icon = document.querySelector('.logo')
    let updatedLogo = document.createElement('img')
    updatedLogo.setAttribute('src',holiday[obj].logo)
    updatedLogo.setAttribute('class','logo')
    icon.replaceWith(updatedLogo)
    // --------------------------------------------------------{Step2}

    // background
    document.body.style.backgroundColor = holiday[obj].bgColor
        // --------------------------------------------------------{Step3}
}

updatesite('vday')

