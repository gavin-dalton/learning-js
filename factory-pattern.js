const peopleFactory = function(name, age, state) {
	console.log('Factory called');
  var temp = {};
  temp.age = age;
  temp.name = name;
  temp.state = state;
  temp.printPerson = function() {
  	console.log(this.name + ", " + this.age + ", " + this.state);
  };
  
  return temp;
};

var p1 = peopleFactory('John Smith', 34, 'Gauteng');
var p2 = peopleFactory('Sara Jones', 28, 'Cape Town');
var p3 = peopleFactory('Dan Viljoen', 44, 'Natal');

p1.printPerson();
p2.printPerson();
p3.printPerson();
