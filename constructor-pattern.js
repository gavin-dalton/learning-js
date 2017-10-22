function PeopleConstructor(name, age, state) {
	this.name = name;
  this.age = age;
  this.state = state;
  this.printPerson = () => {
  	console.log(this.name + ', ' + this.age + ', ' + this.state);
  };
};

var p1 = new PeopleConstructor('John Smith', 34, 'Gauteng');
var p2 = new PeopleConstructor('Sara Jones', 28, 'Cape Town');
var p3 = new PeopleConstructor('Dan Viljoen', 44, 'Natal');

p1.printPerson();
p2.printPerson();
p3.printPerson();
