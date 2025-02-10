const personPrototype={
    greeting: function () {
        console.log(`Hello, My name is: ${this.name}.`);
        
    }
}
const Obj1 = Object.create(personPrototype);

Obj1.name = "Yugank"

Obj1.greeting();
