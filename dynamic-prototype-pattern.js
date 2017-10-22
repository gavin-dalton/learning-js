var peopleDynamicProto = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;

  // If printPerson is not a prototype function yet
  // then add it to the first instance, which will
  // carry through to all instances.
  if (typeof this.printPerson !== 'function') {
    peopleDynamicProto.prototype.printPerson = function() {
      console.log(this.name + ', ' + this.age + ', ' + this.state);
    };
  }
};

var p1 = new peopleDynamicProto('John Smith', 34, 'Gauteng');
var p2 = new peopleDynamicProto('Sara Jones', 28, 'Cape Town');
var p3 = new peopleDynamicProto('Dan Viljoen', 44, 'Natal');

console.log('Does p1 have \'name\' property: ' + ('name' in p1));
console.log('Does p1 have its own \'name\' property: ' + p1.hasOwnProperty('name'));
console.log('Does p1 have its own \'printPerson\' property: ' + p1.hasOwnProperty('printPerson') + '\n\n');

p1.printPerson();
p2.printPerson();
p3.printPerson();

