let work = ['Haynes Furniture', 'Maintained and updated product data in excel programs', 'Product procurement and transfers to fulfill warehouses and stores', 'Generating performance reports for management']
let education = ['University of Virginia', 'College of Arts and Science', 'Bachelor of Arts, Economics', '2015-2019']
let skill = ['Javascript', 'HTML', 'CSS', 'Microsoft Office', 'Problem Solving']
let like = 0




const changeImage = (pic) => {
    let profilePic = document.querySelector(".mePic")
    // profilePic.setAttribute('src', pic)
    if (profilePic.getAttribute('src') === 'anonymous.jpg') {
        profilePic.setAttribute('src', pic)
    } else {
        profilePic.setAttribute('src', 'anonymous.jpg')
    }
}

const displayWork = () => {
    let image = document.querySelector("#work1")
    if (image.getAttribute('class') === 'workImg') {
        image.setAttribute('class', 'workImg2')
        for (i = 0; i < work.length; i++) {
            let displayText = document.createElement('div')
        // 2.Assign Class 
            displayText.setAttribute('class', 'reveal')
        // 2a. Fill New Element with Info
            displayText.innerHTML = work[i]
        // 3. Append Item
            let display1 = document.querySelector('.experience')
            display1.append(displayText)
        } 
    } else {
        image.setAttribute('class', 'workImg')
        for (i=0; i < work.length; i++) {
            document.querySelector('.reveal').remove()
        }
    }
}

const displayEdu = () => {
    let image1 = document.querySelector("#edu1")
    if (image1.getAttribute('class') === 'eduImg') {
        image1.setAttribute('class', 'eduImg2')
        for (i = 0; i < education.length; i++) {
            let displayText = document.createElement('div')
        // 2.Assign Class 
            displayText.setAttribute('class', 'reveal1')
        // 2a. Fill New Element with Info
            displayText.innerHTML = education[i]
        // 3. Append Item
            let display1 = document.querySelector('.education')
            display1.append(displayText)
        } 
    } else {
        image1.setAttribute('class', 'eduImg')
        for (i=0; i < education.length; i++) {
            document.querySelector('.reveal1').remove()
        }
    }
}

const displaySkill = () => {
    let image2 = document.querySelector("#skill1")
    if (image2.getAttribute('class') === 'skillImg') {
        image2.setAttribute('class', 'skillImg2')
        for (i = 0; i < skill.length; i++) {
            let displayText = document.createElement('div')
        // 2.Assign Class 
            displayText.setAttribute('class', 'reveal2')
        // 2a. Fill New Element with Info
            displayText.innerHTML = skill[i]
        // 3. Append Item
            let display1 = document.querySelector('.skills')
            display1.append(displayText)
        } 
    } else {
        image2.setAttribute('class', 'skillImg')
        for (i=0; i < skill.length; i++) {
            document.querySelector('.reveal2').remove()
        }
    }
}

const displayLike = () => {
    let likes = document.querySelector('#likePic')
    likes.setAttribute('class', 'likeImg2')
    like += 1
    let likenum = document.querySelector(".likeNum")
    likenum.innerHTML = like
}