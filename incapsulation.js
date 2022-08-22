class Enemy  {
    constructor(name, phrase, power, speed) {
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}



class Alien extends Enemy {
    #birthYear // Сначала нужно объявить закрытое свойство, используя в начале его имени символ '#'

    constructor (name, phrase, power, speed, birthYear) {
        super(name, phrase, power, speed)
        this.species = "alien"
        this.#birthYear = birthYear // Затем внутри функции конструктора мы присваиваем его значение
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`) // и используем его в соответствующем методе
}
    
// Привычным образом выполняем инстанцирование
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000)
alien1.howOld() // вывод: "I was born in 10000"

console.log(alien1.#birthYear) // Выбрасывает ошибку