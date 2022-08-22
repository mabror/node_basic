class Enemy {
    constructor(power) {
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

class Alien extends Enemy {
    constructor (name, phrase, power) {
        super(power)
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien =  new Alien('Abror', 'Screw it', 15)

alien.attack()
console.log(alien.power)





// class Character {
//     constructor (speed) {
//         this.speed = speed
//     }

//     move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
// }

// class Enemy extends Character {
//     constructor(power, speed) {
//         super(speed)
//         this.power = power
//     }

//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
// }


// class Alien extends Enemy {
//     constructor (name, phrase, power, speed) {
//         super(power, speed)
//         this.name = name
//         this.phrase = phrase
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
//     sayPhrase = () => console.log(this.phrase)
// }