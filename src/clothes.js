import cardman01 from './components/main/Part3/img/man/01.jpg';
import cardman02 from './components/main/Part3/img/man/02.jpg';
import cardman03 from './components/main/Part3/img/man/03.jpg';
import cardman04 from './components/main/Part3/img/man/04.jpg';
import cardman05 from './components/main/Part3/img/man/05.jpg';
import cardman06 from './components/main/Part3/img/man/06.jpg';
import cardman07 from './components/main/Part3/img/man/07.jpg';
import cardman08 from './components/main/Part3/img/man/08.jpg';

import cardwoman01 from './components/main/Part3/img/woman/01.jpg';
import cardwoman02 from './components/main/Part3/img/woman/02.jpg';
import cardwoman03 from './components/main/Part3/img/woman/03.jpg';
import cardwoman04 from './components/main/Part3/img/woman/04.jpg';
import cardwoman05 from './components/main/Part3/img/woman/05.jpg';
import cardwoman06 from './components/main/Part3/img/woman/06.jpg';
import cardwoman07 from './components/main/Part3/img/woman/07.jpg';
import cardwoman08 from './components/main/Part3/img/woman/08.jpg';

let clothes = {
	men: [
		{
			id: 1,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman01,
		},
		{
			id: 2,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman02,
		},
		{
			id: 3,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman03,
		},
		{
			id: 4,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman04,
		},
		{
			id: 5,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman05,
		},
		{
			id: 6,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman06,
		},
		{
			id: 7,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman07,
		},
		{
			id: 8,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardman08,
		},

	],
	women: [
		{
			id: 1,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman01,
		},
		{
			id: 2,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman02,
		},
		{
			id: 3,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman03,
		},
		{
			id: 4,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman04,
		},
		{
			id: 5,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman05,
		},
		{
			id: 6,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman06,
		},
		{
			id: 7,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman07,
		},
		{
			id: 8,
			title: "Women's tracksuit Q109",
			cost: "$ 30.00",
			imgCard: cardwoman08,
		},

	]
};

function getItem(productType, id) {
	console.log(productType, id);
	console.log(clothes);
	return clothes[productType.toLowerCase()].find(item => item.id === id);
}

function getItemsByType(productType) {
	return clothes[productType.toLowerCase()];
}


export { clothes, getItem, getItemsByType };
