// Parent Functions

const cleanToilet = () => {
    getDetergent()
    scrubToilet()
    flushToilet()
}

const makeBed = () => {
    makeSheet()
    foldBlanket()
    madeBed()
}

const washLaundry = () => {
    getDetergent()
    washMachine()
    cleanCloth()
}

const cleanFloor = () => {
    getVacuum()
    vacuumFloor()
    freshFloor()
}

const cleanTrash = () => {
    tieTrash()
    throwTrash()
    freshTrash()
}

const washDishes = () => {
    getDetergent()
    washPlates()
    rinsingPlates()
}

// Child Functions

// const prompt = 

const getDetergent = () => {
    console.log("Getting detergent.")
}

const washPlates = () => {
    console.log("Scrubbing plates.")
}

const rinsingPlates = () => {
    console.log("Rinsing soap off. Plate is clean!")
}

const scrubToilet = () => {
    console.log("Scrubbing toilet.")
}

const flushToilet = () => {
    console.log("Flush toilet, toilet is now clean!")
}

const makeSheet = () => {
    console.log("Make bed sheet")
}

const foldBlanket = () => {
    console.log("Folding blankets")
}

const madeBed = () => {
    console.log("Bed is made!")
}

const washMachine = () => {
    console.log("Putting cloth is washing machine")
}

const cleanCloth = () => {
    console.log("Clothes are cleaned!")
}

const tieTrash = () => {
    console.log("Tying up trash bag")
}

const throwTrash = () => {
    console.log("Throwing out trash")
}

const freshTrash = () => {
    console.log("Putting in new trash bag!")
}

const getVacuum = () => {
    console.log("Getting vacuum")
}

const vacuumFloor = () => {
    console.log("Vacuuming dirt off floor")
}

const freshFloor = () => {
    console.log("Floor is now clean!")
}

cleanToilet()
makeBed()
washLaundry()
cleanFloor()
cleanTrash()
washDishes()