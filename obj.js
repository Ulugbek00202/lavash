function cartObj() {
	let rand = randomNumbers(1, 2)

	const priceList = {
		1: {
			Lavash: {
				info: 'big cheese',
				price: 22000,
			},
			'Hot-dog': {
				info: 'mini',
				price: 15000,
			},
			Cola: {
				info: '1.5 L',
				price: 9000,
			},
		},
		2: {
			Sushi: {
				info: 'max-roll',
				price: 32000,
			},
			Soya: {
				info: '200ml',
				price: 5000,
			},
		},
	}

	return priceList[rand]
}

function randomNumbers(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const ct = cartObj()
let total = 0
const delivery = 9000
const itemsList = []

const items = ['Lavash', 'Hot-dog', 'Cola']
const items2 = ['Sushi', 'Soya']

items.forEach(item => {
	if (ct[item]) {
		total += ct[item].price
		itemsList.push(`${item} ${ct[item].info}`)
	}
})

items2.forEach(item => {
	if (ct[item]) {
		total += ct[item].price
		itemsList.push(`${item} ${ct[item].info}`)
	}
})

console.log(
	`Sizning buyurtmangiz: ${itemsList.join(
		', '
	)} | yetkazib berish xizmati bilan bo'lgan narx ${total} so'm, yetkazish xaqqi (${delivery} so'm) `
)
