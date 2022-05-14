// const form = document.querySelector('.signupForm');
// const username = document.querySelector('#username');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     console.log(form.username.value);
// });

let stocks = {
	Fruits: ["strawberry", "grapes", "banana", "apple"],
	liquid: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"],
};

let shopIsOpen = true;

let order = (time, work) => {
	new Promise((resolve, reject) => {
		if (shopIsOpen) {
			setTimeout(() => {
				resolve(work());
			}, time);
		} else {
			reject(() => {
				console.log("Our Shop is closed");
			});
		}
	});
};

order(2000, () => console.log(`${stocks.Fruits[0]} has been selected`))
	.then(() => {
		return order(1000, () => console.log("1 production has started"));
	})
	.then(() => {
		return order(2000, () => console.log(" 2 The fruit has been chopped"));
	})
	.then(() => {
		return console.log(
			`3 ${stocks.liquid[0]} and ${stocks.liquid[1]} Added`
		);
	})
	.then(() => {
		return console.log("4 start the machine");
	})
	.then(() => {
		return console.log(`5 Ice cream placed on ${stocks.holder[1]}`);
	})
	.then(() => {
		return console.log(`6 ${stocks.toppings[0]} as toppings`);
	})
	.then(() => {
		return console.log(" 7 serve Ice cream");
	})
	.catch(() => {
		return console.log("the request has been rejected");
	});

console.log("the last console.log");
// let production = () => {
// 	setTimeout(() => {
// 		console.log("1 production has started");
// 		setTimeout(() => {
// 			console.log(" 2 The fruit has been chopped");
// 			setTimeout(() => {
// 				console.log(
// 					`3 ${stocks.liquid[0]} and ${stocks.liquid[1]} Added`
// 				);
// 				setTimeout(() => {
// 					console.log("4 start the machine");
// 					setTimeout(() => {
// 						console.log(
// 							`5 Ice cream placed on ${stocks.holder[1]}`
// 						);
// 						setTimeout(() => {
// 							console.log(`6 ${stocks.toppings[0]} as toppings`);
// 							setTimeout(() => {
// 								console.log(" 7 serve Ice cream");
// 							}, 2000);
// 						}, 3000);
// 					}, 2000);
// 				}, 1000);
// 			}, 1000);
// 		}, 2000);
// 		console.log("something");
// 	}, 0000);
// };

// production();
