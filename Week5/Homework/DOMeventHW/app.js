let body = document.querySelector('body')

let broadcast = document.createElement('div')
broadcast.setAttribute('class','broadcast')

let screen = document.createElement('div')
screen.setAttribute('class','screen')
let map = document.createElement('div')
map.setAttribute('class','mapimg')
let screenPic = document.createElement('img')
screenPic.setAttribute('class','animal')
screenPic.setAttribute('src','https://media.baamboozle.com/uploads/images/1085999/1674346026_72495_gif-url.gif')
screen.append(screenPic)
let mapPic = document.createElement('img')
mapPic.setAttribute('class','mapPic')
mapPic.setAttribute('src','https://cdn5.vectorstock.com/i/1000x1000/29/29/world-map-with-wildlife-animals-and-plants-vector-12512929.jpg')
map.append(mapPic)
broadcast.append(screen)
broadcast.append(map)
let title = document.createElement('h1')
title.innerHTML = "Animal Discovery"
body.append(title)
body.append(broadcast)
let zoo = ['Tiger','Whale','Elephant','Wolf']

for(animal of zoo) {
    let button = document.createElement('button')
    button.setAttribute('class',animal)
    button.innerHTML = animal
    body.append(button)
}

let summary = document.createElement('div')
summary.setAttribute('class','summary')
body.append(summary)

const tiger = document.querySelector('.Tiger')
const whale = document.querySelector('.Whale')
const elephant = document.querySelector('.Elephant')
const wolf = document.querySelector('.Wolf')
const mainScreen = document.querySelector('.screen')

const wildlife = {
    tiger: {
        map: "https://pbs.twimg.com/media/EbYSJWGXkAIsXOT.jpg:large",
        summary: "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar.",
        gif: 'https://media.tenor.com/Jbkhm4x1TAUAAAAd/roaming-tiger-tigers101.gif'
    },
    whale: {
        map: "https://e3.365dm.com/22/02/768x432/skynews-whale-wwf-uk-oceans_5676247.jpg?20220217082614",
        summary: "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. As an informal and colloquial grouping, they correspond to large members of the infraorder Cetacea, i.e. all cetaceans apart from dolphins and porpoises.",
        gif: 'https://media2.giphy.com/media/l1J3OQZgOKjJhdsUU/giphy.gif'
    },
    elephant: {
        map: "https://64.media.tumblr.com/14a1689b6fad3c9a8e08aa3acd0d8213/47500a3f90d0cf61-70/s1280x1920/a3cadefeac01bccf1c3871570af3b3040ccda7f0.jpg",
        summary: "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea.",
        gif: 'https://media1.giphy.com/media/l3977NVbc2gilsoPm/giphy.gif'
    },
    wolf: {
        map: "https://upload.wikimedia.org/wikipedia/commons/8/84/Gray_Wolf_Range.png",
        summary: "The wolf, also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, including the dog, though gray wolves, as popularly understood, only comprise wild subspecies.",
        gif: 'https://media.tenor.com/JpcVkuH0AHUAAAAd/wolf-howling-wolf.gif'
    }
}

mainScreen.addEventListener('click', (e)=>{
    screenPic.setAttribute('src','https://media.baamboozle.com/uploads/images/1085999/1674346026_72495_gif-url.gif')
})

tiger.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newAnimal = document.querySelector('.animal')
    //target input to snatch out value
    newAnimal.setAttribute('src', wildlife.tiger.gif)
    let mapPic = document.querySelector(".mapPic")
    mapPic.setAttribute('src',wildlife.tiger.map)
    let summary = document.querySelector('.summary')
    summary.innerHTML = wildlife.tiger.summary
})

whale.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newAnimal = document.querySelector('.animal')
    //target input to snatch out value
    newAnimal.setAttribute('src', wildlife.whale.gif)
    let mapPic = document.querySelector(".mapPic")
    mapPic.setAttribute('src',wildlife.whale.map)
    let summary = document.querySelector('.summary')
    summary.innerHTML = wildlife.whale.summary
})

elephant.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newAnimal = document.querySelector('.animal')
    //target input to snatch out value
    newAnimal.setAttribute('src', wildlife.elephant.gif)
    let mapPic = document.querySelector(".mapPic")
    mapPic.setAttribute('src',wildlife.elephant.map)
    map.append(mapPic)
    let summary = document.querySelector('.summary')
    summary.innerHTML = wildlife.elephant.summary
})

wolf.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newAnimal = document.querySelector('.animal')
    //target input to snatch out value
    newAnimal.setAttribute('src', wildlife.wolf.gif)
    let mapPic = document.querySelector(".mapPic")
    mapPic.setAttribute('src',wildlife.wolf.map)
    map.append(mapPic)
    let summary = document.querySelector('.summary')
    summary.innerHTML = wildlife.wolf.summary
})