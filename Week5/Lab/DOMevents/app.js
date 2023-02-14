const btn = document.querySelector('button')
//Target button
btn.addEventListener('click', (e)=>{
    //allow button do something => running an eventListener
    let newEntry = document.createElement('div')
    //newElement created by the new event
    let input = document.querySelector('input')
    //target input to snatch out value
    let relevantData = input.value

    newEntry.textContent = relevantData
    //link scraped data into new element

    let screen = document.querySelector('.screen')
    //select place to drop new element

    screen.append(newEntry)
})

//.val
//.textContent()
//innerHTML
//.text
//these can can interchangable