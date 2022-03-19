class Puppy {
    constructor(name, breed, color){
      this.name = name
      this.breed = breed
      this.color = color
    }
  
    speak() {
      console.log(`${name} says 'arf'`)
    }
  
    about() {
      console.log(`${name} is just a lil ${color} pup. He's a ${breed}`)
    }
  }
  
  module.exports = Puppy