import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
	/*Players.insert({
		name: 'Tanis',
		score: 10
	});
	console.log(Players.find().fetch());*/
	
	/*let square = function (x) {
		return x * x;
	};*/

	/* this is an arrow function, works like a normal function 
	let square = (x) => x * x;
	
	
	console.log(square(10));
	*/

	let user = {
		name: 'Mark',
		sayHi () {
			setTimeout(() => {
				console.log(this.name);
			}, 1000);
		}
	};
	user.sayHi(1, 2);

	let numbers = [9,99,4,56];
	let newNumbers = numbers.map((number) => number + 1);
	console.log(newNumbers);
});
