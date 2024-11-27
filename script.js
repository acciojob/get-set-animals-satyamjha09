class Animal {
	constructor(species) {
		this.species = species;
	}

	// Method to log the sound the animal makes
	makeSound() {
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	// Method to log "woof"
	bark() {
		console.log("woof");
	}
}

class Cat extends Animal {
	// Method to log "purr"
	purr() {
		console.log("purr");
	}
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
