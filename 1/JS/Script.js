//let number = 5;

//console. log("Hallo");

//alert("Вход воспрещён!");

//confirm("Есть ли Вас 18 лет?");

//let answer = confirm("Есть ли Вас 18 лет?");
//let answer = prompt("Есть ли Вас 18 лет?");

//console. log(answer);

// let answers = [];

// answers[0] = prompt("Как Ваше имя?", "");
// answers[1] = prompt("Как Ваша фамилия?", "");
// answers[2] = prompt("Сколько Вам лет?", "");

// document.write(answers)


// let answers = []
// 	questions = [
// 	"Как Ваше имя",
// 	"Как Ваша фамилия",
// 	"Сколько Вам лет"];

// for (let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers)


// let age = prompt("Сколько вам лет?");

// if (age > 18) {
// 	alert("Вы можете войти")
// } else {
// 	alert("Рановато ещё")
// }

// function humanSeyHello(obj) {
// 	document.write("Hello " + obj + "!")
// }

// humanSeyHello("Ivan");
// humanSeyHello("Ivan2");
// humanSeyHello("Ivan3");


// function calc(a,b) {
// 	console.log(a + b)
// };

// calc(4,5);
// calc(5,5);
// calc(5,15);


function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function ShowSkills() { 
		let skills = ['html', 'css', 'turbo pascal', 'Delphi'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + '<br>')
		};
	};

	ShowSkills();

	function checkAge() {
		if (age > 18) {
			alert("Вы можете войти")
		} else {
			alert("Рановато ещё")		}
	};
	checkAge();

	function calcPow(num) {
		console.log(num*num)
	}
	calcPow (4);
}

myFirstApp("Alex", 28) 
