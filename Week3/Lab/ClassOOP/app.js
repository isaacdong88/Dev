class House {
    constructor (Year, Story) {
        this.Year = Year
        this.Story = Story
    }
}

class Car {
}

const house1 = new House(1996,2)
house1.color = 'Red'
console.log(house1)
console.log(House)
console.log(Car)