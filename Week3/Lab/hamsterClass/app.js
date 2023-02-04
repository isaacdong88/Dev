class Hampster {
    constructor(name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        return "squeak squeak"
    }

    eatFood() {
        return "nibble nibble"
    }

    getPrice() {
        return this.price
    }

}


class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        return `How are you ${this.name}?`
    }

    eat() {
        this.weight += 2
        this.mood += 5
    }

    exercise() {
        this.weight -= 1
    }

    ageUp() {
        this.age += 1
        this.height += 1
        this.weight += 2
        this.mood -= 3
        this.bankAccount += 10
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()

    }
}

const newPerson = new Person('Timmy')

newPerson.age = 5
console.log(`Timmy is ${newPerson.age} years old.`)

for(let i=0;i<5;i++){
    newPerson.eat()
}

console.log(`Timmy is a precocious child, he feels he's seen it all already. He decides to over eat and now weighs ${newPerson.weight+70} pounds!`)

for(let i=0;i<5;i++){
    newPerson.exercise()
}

console.log(`Timmy realized he gained too much weight and want slim down before school starts. So he exercised everday for a week and lost 5 pounds, he now weighs ${newPerson.weight+70}.`)

for(let i=0;i<4;i++){
    newPerson.ageUp()
}

console.log(`Time flew by. Timmy is now ${newPerson.age}.`)

// console.log(newPerson)

const newHamster = new Hampster("Gus")
// console.log(newHamster)
newHamster.owner = "Timmy"

newPerson.buyHamster(newHamster)

console.log(`Timmy now has enough money to buy a pet hamster he named it ${newPerson.hamsters[0].name}.`)

for(let i=0;i<6;i++){
    newPerson.ageUp()
}

console.log(`Timmy is now ${newPerson.age} and starting high school.`)

for(let i=0;i<2;i++){
    newPerson.eat()
}

console.log(`Timmy want to bulk up and decided to eat more. He now weighs ${newPerson.weight+70}.`)

for(let i=0;i<2;i++){
    newPerson.exercise()
}

console.log(`Timmy wanted to look good for the beach and started hitting the gym again. He cut down to ${newPerson.weight+70}.`)

// console.log(newPerson)
// console.log(newHamster)





//Chef Make Dinners

class Dinner {
    constructor(appetizer,entree,dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }

}

class Chef {
    makeDish(appetizer,entree,dessert) {
        const newDinner = new Dinner(appetizer,entree,dessert)
        console.log(`Tonight's dinner items includes ${newDinner.appetizer} for appetizer, ${newDinner.entree} for main entree and ${newDinner.dessert} for dessert! `)
    }

}

const newChef = new Chef()

newChef.makeDish("BBQ Wings","Maine Lobster Roll","Chocolate Icecream")
newChef.makeDish("Spring Rolls","Sesame Chicken","Raspberry Pie")
newChef.makeDish("Chips N' Dips","Hickory Grilled Salmon","Rice Pudding")
