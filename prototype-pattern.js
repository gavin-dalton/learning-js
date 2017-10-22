var peopleProto = function() {};

peopleProto.prototype.name = 'no name';
peopleProto.prototype.age = 0;
peopleProto.prototype.state = 'no state';

peopleProto.prototype.printPerson = function() {
	console.log(this.name + ', ' + this.age + ', ' + this.state);
};

var p1 = new peopleProto();
//p1.name = 'John Smith';
p1.age = 34;
p1.state = 'Gauteng';

var p2 = new peopleProto();
p2.name = 'Sara Jones';
p2.age = 28;
p2.state = 'Cape Town';

var p3 = new peopleProto();
p3.name = 'Dan ViljoenS';
p3.age = 44;
p3.state = 'Natal';

console.log('Does p1 have name property: ' + ('name' in p1));
console.log('Does p1 have its own name property: ' + p1.hasOwnProperty('name') + '\n\n');

p1.printPerson();
p2.printPerson();
p3.printPerson();
