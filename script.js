// Define the Animal class
class Animal {
	constructor(species) {
		this._species = species;
	}

	// Getter for species
	get species() {
		return this._species;
	}

	// Method to log the sound the animal makes
	makeSound() {
		console.log(`The ${this.species} makes a sound`);
	}
}

// Define the Cat class extending Animal
class Cat extends Animal {
	// Method to log "purr"
	purr() {
		console.log("purr");
	}
}

// Define the Dog class extending Animal
class Dog extends Animal {
	// Method to log "woof"
	bark() {
		console.log("woof");
	}
}

// Example Usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

