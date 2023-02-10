const expand = () => {
    let bowser = document.querySelector('.bowser')
    bowser.classList.toggle('expand')
}

const jump = () => {
    let peach = document.querySelector('.princess')
    peach.classList.toggle('jump')
} 

const noCloud = () => {
    let cloud = document.querySelector('.cloud')
    cloud.classList.toggle('disappear')
    let mario = document.querySelector('.ball')
    mario.classList.toggle('falling3')

} 