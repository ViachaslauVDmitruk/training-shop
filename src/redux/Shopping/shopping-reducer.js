import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	products: [
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Водолазка',
			category: 'men',
			brand: 'Casual Friday by Blend',
			material: 'Шерсть - 50%, Акрил - 50%',
			rating: 4,
			price: 108,
			sizes: ['M INT'],
			discount: null,
			reviews: [
				{
					name: 'Ivan Kurnov',
					text: 'Хороший, но оказался большой. Закажем на размер меньше.',
					rating: 3,
					id: '620135567d2312f4e7932fc5',
				},
				{
					name: 'Aliaskei Jurdan',
					text: 'отличная водолазка, но мой рост 192 и для меня он короткий. рекомендую для невысоких',
					rating: 5,
					id: '620135c87d2312f4e7932fce',
				},
				{
					name: 'Aliaskei Jurdan',
					text: 'отличная водолазка, но мой рост 192 и для меня он короткий. рекомендую для невысоких',
					rating: 4,
					id: '620136e17d2312f4e7933007',
				},
				{ name: 'Ivan Vorobeynikov', text: 'норм водолазка', rating: 3, id: '620137a577fffe0cd128be85' },
			],
			images: [
				{
					color: 'Black',
					url: '/media/6200e42d1c08840bc803ad24/RTLAAL003701_15010467_2_v1_2x.webp',
					id: '62012eeb7d2312f4e7932f0e',
				},
				{
					color: 'Black',
					url: '/media/6200e42d1c08840bc803ad24/RTLAAL003701_15010466_1_v1_2x.webp',
					id: '62012eef7d2312f4e7932f12',
				},
			],
			id: '6200e42d1c08840bc803ad24',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Джемпер',
			category: 'men',
			brand: "Levi's",
			material: 'Шерсть - 80%, Полиамид - 20%',
			rating: 5,
			price: 108,
			sizes: ['M INT'],
			discount: null,
			reviews: [],
			images: [
				{
					color: 'Blue',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAT977701_15404370_1_v1_2x.jpg',
					id: '62012fb27d2312f4e7932f1e',
				},
				{
					color: 'Blue',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAT977701_15404371_2_v1_2x.webp',
					id: '62012fb67d2312f4e7932f21',
				},
				{
					color: 'Blue',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAT977701_15404372_3_v1_2x.webp',
					id: '62012fba7d2312f4e7932f24',
				},
				{
					color: 'White',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAQ292301_15088108_3_v1_2x.jpg',
					id: '620130687d2312f4e7932f2d',
				},
				{
					color: 'White',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAQ292301_15088106_1_v1_2x.jpg',
					id: '6201306c7d2312f4e7932f30',
				},
				{
					color: 'White',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAQ292301_15088107_2_v1_2x.webp',
					id: '6201306f7d2312f4e7932f33',
				},
				{
					color: 'Brown',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAQ292401_15088112_3_v1_2x.webp',
					id: '620130a57d2312f4e7932f36',
				},
				{
					color: 'Brown',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAQ292401_15088111_2_v1_2x.webp',
					id: '620130a97d2312f4e7932f39',
				},
				{
					color: 'Brown',
					url: '/media/6200e4b61c08840bc803ad27/RTLAAQ292401_15088110_1_v1_2x.jpg',
					id: '620130ae7d2312f4e7932f3c',
				},
			],
			id: '6200e4b61c08840bc803ad27',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Полувер',
			category: 'men',
			brand: 'Auden Cavill',
			material: 'Хлопок - 50%, Полиэстер - 50%',
			rating: 5,
			price: 184.8,
			sizes: ['M INT'],
			discount: null,
			reviews: [],
			images: [
				{
					color: 'Green',
					url: '/media/6200e5031c08840bc803ad2a/RTLAAQ293601_15017278_2_v1.webp',
					id: '6201311e7d2312f4e7932f3f',
				},
				{
					color: 'Orange',
					url: '/media/6200e5031c08840bc803ad2a/RTLAAQ292501_15088980_3_v1_2x.webp',
					id: '6201314b7d2312f4e7932f4f',
				},
				{
					color: 'Orange',
					url: '/media/6200e5031c08840bc803ad2a/RTLAAQ292501_15088979_2_v1_2x.webp',
					id: '6201314f7d2312f4e7932f52',
				},
			],
			id: '6200e5031c08840bc803ad2a',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: true,
				isFeatured: false,
			},
			name: 'Свитер',
			category: 'men',
			brand: 'Primo Emporio',
			material: 'Акрил - 85%, Шерсть - 15%',
			rating: 1,
			price: 148.8,
			sizes: ['M INT'],
			discount: null,
			reviews: [{ name: 'Alesha Popovich', text: 'Хороший товар!', rating: 1, id: '620134b07d2312f4e7932fa5' }],
			images: [
				{
					color: 'White',
					url: '/media/6200e55e1c08840bc803ad2d/RTLAAV537501_15738022_3_v1_2x.webp',
					id: '620131f67d2312f4e7932f55',
				},
				{
					color: 'White',
					url: '/media/6200e55e1c08840bc803ad2d/RTLAAV537501_15738021_2_v1_2x.webp',
					id: '620131fb7d2312f4e7932f58',
				},
				{
					color: 'Black',
					url: '/media/6200e55e1c08840bc803ad2d/RTLAAV537401_15738018_3_v1_2x.webp',
					id: '620132187d2312f4e7932f5b',
				},
				{
					color: 'Black',
					url: '/media/6200e55e1c08840bc803ad2d/RTLAAV537401_15738017_2_v1_2x.webp',
					id: '6201321c7d2312f4e7932f5e',
				},
				{
					color: 'Black',
					url: '/media/6200e55e1c08840bc803ad2d/RTLAAV537401_15738016_1_v1_2x.webp',
					id: '620132207d2312f4e7932f61',
				},
			],
			id: '6200e55e1c08840bc803ad2d',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: true,
			},
			name: 'Джемпер CRETA',
			category: 'men',
			brand: 'Mango Man',
			material: 'Хлопок - 100%',
			rating: 4,
			price: 179.99,
			sizes: ['M INT', 'S INT', 'L INT', 'XL INT', 'XXL INT'],
			discount: null,
			reviews: [],
			images: [
				{
					color: 'Multicolor',
					url: '/media/6200e65a1c08840bc803ad30/RTLABB930801_16256628_3_v1.webp',
					id: '6203641877fffe0cd128c037',
				},
				{
					color: 'Multicolor',
					url: '/media/6200e65a1c08840bc803ad30/RTLABB930801_16256627_2_v1.webp',
					id: '6203641c77fffe0cd128c03a',
				},
				{
					color: 'Multicolor',
					url: '/media/6200e65a1c08840bc803ad30/RTLABB930801_16256626_1_v1.webp',
					id: '6203642177fffe0cd128c03d',
				},
			],
			id: '6200e65a1c08840bc803ad30',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Джемпер',
			category: 'men',
			brand: 'Jack & Jones',
			material: 'Хлопок - 100%',
			rating: 4,
			price: 134,
			sizes: ['M INT', 'S INT', 'L INT', 'XL INT'],
			discount: null,
			reviews: [
				{
					name: 'Ruslan Gelik',
					text: 'Отличный джемпер, сидит прекрасно, современный, хорошего качества.',
					rating: 5,
					id: '6203655f77fffe0cd128c058',
				},
				{
					name: 'Olga',
					text: 'Размер соответсвует. Мягкий, красивый. Мужу нравится:)',
					rating: 5,
					id: '620365cd77fffe0cd128c069',
				},
				{
					name: 'Fateeva Evgenia',
					text: 'Рыхлая вязка, по ощущениям быстро могут появиться затяжки. Мужу совсем не понравился "бабушкин" воротник...',
					rating: 3,
					id: '620365fb77fffe0cd128c07c',
				},
			],
			images: [
				{
					color: 'Blue',
					url: '/media/6200e6bd1c08840bc803ad33/RTLAAT849301_15345587_3_v1.jpg',
					id: '620364e677fffe0cd128c040',
				},
				{
					color: 'Blue',
					url: '/media/6200e6bd1c08840bc803ad33/RTLAAT849301_15345586_2_v1.jpg',
					id: '620364ea77fffe0cd128c043',
				},
				{
					color: 'Blue',
					url: '/media/6200e6bd1c08840bc803ad33/RTLAAT849301_15345585_1_v1.jpg',
					id: '620364ee77fffe0cd128c046',
				},
				{
					color: 'Beige',
					url: '/media/6200e6bd1c08840bc803ad33/RTLAAT849401_15514296_3_v1_2x.webp',
					id: '6203652e77fffe0cd128c049',
				},
				{
					color: 'Beige',
					url: '/media/6200e6bd1c08840bc803ad33/RTLAAT849401_15514295_2_v1_2x.webp',
					id: '6203653277fffe0cd128c04c',
				},
				{
					color: 'Beige',
					url: '/media/6200e6bd1c08840bc803ad33/RTLAAT849401_15514294_1_v1_2x.webp',
					id: '6203653677fffe0cd128c04f',
				},
			],
			id: '6200e6bd1c08840bc803ad33',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Кардиган',
			category: 'men',
			brand: 'Stormy Life',
			material: 'Акрил - 80%, Шерсть - 20%',
			rating: 4,
			price: 191.2,
			sizes: ['M INT', 'XXL INT', 'L INT', '3XL INT'],
			discount: null,
			reviews: [
				{
					name: 'Smirnov Sergey',
					text: 'Хорошая,немного колючая. Не подошел размер.',
					rating: 4,
					id: '62039b5977fffe0cd128c1af',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX817901_15996787_3_v1_2x.webp',
					id: '62039ad177fffe0cd128c18b',
				},
				{
					color: 'Black',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX817901_15996786_2_v1_2x.webp',
					id: '62039ad577fffe0cd128c18e',
				},
				{
					color: 'Black',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX817901_15996785_1_v1_2x.webp',
					id: '62039ad977fffe0cd128c191',
				},
				{
					color: 'Grey',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX818301_15996799_3_v1_2x.webp',
					id: '62039af077fffe0cd128c194',
				},
				{
					color: 'Grey',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX818301_15996798_2_v1_2x.webp',
					id: '62039af377fffe0cd128c197',
				},
				{
					color: 'Grey',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX818301_15996797_1_v1_2x.webp',
					id: '62039af677fffe0cd128c19a',
				},
				{
					color: 'Blue',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX818401_15996803_3_v1_2x.webp',
					id: '62039b1377fffe0cd128c19d',
				},
				{
					color: 'Blue',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX818401_15996802_2_v1_2x.webp',
					id: '62039b1777fffe0cd128c1a0',
				},
				{
					color: 'Blue',
					url: '/media/6200e74c1c08840bc803ad39/RTLAAX818401_15996801_1_v1_2x.webp',
					id: '62039b1b77fffe0cd128c1a3',
				},
			],
			id: '6200e74c1c08840bc803ad39',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Полувер',
			category: 'men',
			brand: 'Tom Tailor',
			material: 'Акрил - 80%, Шерсть - 20%',
			rating: 5,
			price: 64.5,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{ name: 'Dmitry', text: 'Отличный вариант', rating: 5, id: '6203adf977fffe0cd128c1c4' },
				{ name: 'Andrey', text: 'Пойдёт :)', rating: 4, id: '6203ae1077fffe0cd128c1cd' },
				{ name: 'Nana', text: 'Хороший джемпер,в размер', rating: 4, id: '6203ae2077fffe0cd128c1d8' },
				{
					name: 'Daniil',
					text: 'Качество супер, при носке будем надеяться, что покажет себя также',
					rating: 5,
					id: '6203ae3177fffe0cd128c1e5',
				},
			],
			images: [
				{
					color: 'White',
					url: '/media/6200e7bf1c08840bc803ad3c/RTLAAQ292301_15088106_1_v1_2x.webp',
					id: '6203ad5877fffe0cd128c1bc',
				},
				{
					color: 'Brown',
					url: '/media/6200e7bf1c08840bc803ad3c/RTLAAQ292401_15088110_1_v1_2x.webp',
					id: '6203ad6e77fffe0cd128c1bf',
				},
			],
			id: '6200e7bf1c08840bc803ad3c',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: true,
			},
			name: 'Кардиган',
			category: 'men',
			brand: 'Brave Soul',
			material: 'Хлопок - 65%, Полиэстер - 35%',
			rating: 5,
			price: 59.4,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{
					name: 'pok lok',
					text: "Гарна в'язка і колір. Середня товщина. За свої гроші чудова річ",
					rating: 5,
					id: '6203af2977fffe0cd128c1f2',
				},
				{ name: 'Olya', text: 'Отлично. Прекрасно сшито, не торчат нитки.', rating: 5, id: '6203af3877fffe0cd128c1f9' },
			],
			images: [
				{
					color: 'White',
					url: '/media/6200ec21c110271da7220ffe/RTLAAM769101_14809275_1_v1_2x.webp',
					id: '6203af0c77fffe0cd128c1ee',
				},
			],
			id: '6200ec21c110271da7220ffe',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Полувер',
			category: 'men',
			brand: 'Tom Tailor',
			material: 'Акрил - 80%, Шерсть - 20%',
			rating: 5,
			price: 74.8,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{
					name: 'Olya',
					text: 'Хороший джемпер, смотрится не дёшево, рекомендую, цвет темнее, чем на фото',
					rating: 5,
					id: '6203afec77fffe0cd128c203',
				},
				{ name: 'Sergey', text: 'Приятный материал и цвет', rating: 5, id: '6203b00577fffe0cd128c20a' },
			],
			images: [
				{
					color: 'Turquoise',
					url: '/media/6200ec21c110271da7221000/RTLAAQ293101_15088134_1_v1_2x.webp',
					id: '6203afd477fffe0cd128c1ff',
				},
			],
			id: '6200ec21c110271da7221000',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: true,
			},
			name: 'Свитер',
			category: 'men',
			brand: 'Dissedent',
			material: 'Полиэстер - 100%',
			rating: 4,
			price: 79.7,
			sizes: ['L INT', 'XXL INT', 'XL INT'],
			discount: '-40%',
			reviews: [
				{ name: 'Aliaksei', text: 'Приятный материал и цвет', rating: 5, id: '6204f6c377fffe0cd128c603' },
				{
					name: 'Smirnov',
					text: 'Хорошая,немного колючая. Не подошел размер.',
					rating: 3,
					id: '6204f6e877fffe0cd128c60c',
				},
			],
			images: [
				{
					color: 'White',
					url: '/media/6200f157c110271da7221004/RTLAAV307501_15757686_1_v1_2x.webp',
					id: '6204f68d77fffe0cd128c5fb',
				},
				{
					color: 'Blue',
					url: '/media/6200f157c110271da7221004/RTLAAV307701_15757690_1_v1_2x.webp',
					id: '6204f6a777fffe0cd128c5fe',
				},
			],
			id: '6200f157c110271da7221004',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Водолазка',
			category: 'men',
			brand: 'Jack & Jones',
			material: 'Акрил - 80%, Шерсть - 20%',
			rating: 3,
			price: 93.8,
			sizes: ['M INT', 'XXL INT', '3XL INT', '5XL INT'],
			discount: null,
			reviews: [
				{ name: 'Sergey', text: 'Не соответствует размеру.', rating: 2, id: '6204f80b77fffe0cd128c61b' },
				{ name: 'Igor', text: 'Качество норм. Маломерка.', rating: 3, id: '6204f81b77fffe0cd128c624' },
			],
			images: [
				{
					color: 'Blue',
					url: '/media/6200f157c110271da7221006/RTLAAW434201_15635048_3_v1.webp',
					id: '6204f78577fffe0cd128c613',
				},
				{
					color: 'Black',
					url: '/media/6200f157c110271da7221006/RTLAAW434001_15635038_1_v1.webp',
					id: '6204f7a177fffe0cd128c616',
				},
			],
			id: '6200f157c110271da7221006',
		},
		{
			particulars: { isNewArrivals: false, isSpecial: true, isBestseller: false, isMostViewed: true, isFeatured: true },
			name: 'Кардиган',
			category: 'men',
			brand: 'Brave Soul',
			material: 'Хлопок - 35%, Полиэстер - 65%',
			rating: 3,
			price: 49.4,
			sizes: ['XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{
					name: 'Nikolai',
					text: 'Супер качество. Красивый и стильный. Акула есть акула!',
					rating: 3,
					id: '6204f8fe77fffe0cd128c62f',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/6200f157c110271da7221008/RTLAAZ198101_16123200_3_v1_2x.webp',
					id: '6204f8ea77fffe0cd128c62b',
				},
			],
			id: '6200f157c110271da7221008',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: true,
			},
			name: 'Джемпер',
			category: 'men',
			brand: 'Produkt',
			material: 'Акрил - 20%, Шерсть - 80%',
			rating: 5,
			price: 134,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{
					name: 'Marina',
					text: 'Свитер отличный. На мужчину ростом 176 см, обычного телосложения, сел хорошо. Очень тёплый, немного колючий.',
					rating: 4,
					id: '6204f99777fffe0cd128c63c',
				},
				{ name: 'Ilya', text: 'Приятный к телу. Теплый)', rating: 5, id: '6204f9ad77fffe0cd128c645' },
			],
			images: [
				{
					color: 'White',
					url: '/media/6200f157c110271da722100a/RTLAAS623701_15457068_1_v1_2x.webp',
					id: '6204f95a77fffe0cd128c634',
				},
				{
					color: 'Blue',
					url: '/media/6200f157c110271da722100a/RTLAAS643401_15394541_2_v1_2x.webp',
					id: '6204f97277fffe0cd128c637',
				},
			],
			id: '6200f157c110271da722100a',
		},
		{
			particulars: { isNewArrivals: true, isSpecial: false, isBestseller: true, isMostViewed: false, isFeatured: true },
			name: 'Кардиган',
			category: 'men',
			brand: 'Denim Culture',
			material: 'Хлопок - 200%',
			rating: 2,
			price: 261.2,
			sizes: ['S INT', 'M INT', 'L INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [{ name: 'Ilya', text: 'Не подошёл по размеру', rating: 2, id: '62050b2a77fffe0cd128c7bd' }],
			images: [
				{
					color: 'White',
					url: '/media/6200f157c110271da722100c/RTLAAX972501_16094775_1_v1_2x.webp',
					id: '62050b0e77fffe0cd128c7b9',
				},
			],
			id: '6200f157c110271da722100c',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: true,
				isFeatured: true,
			},
			name: 'Свитер',
			category: 'men',
			brand: 'Dissedent',
			material: 'Хлопок - 55%, Полиэстер - 45%',
			rating: 2,
			price: 80.4,
			sizes: ['S INT', 'M INT'],
			discount: null,
			reviews: [
				{ name: 'Alex', text: 'Плохо сидит не советую', rating: 1, id: '62050bdc77fffe0cd128c7ca' },
				{
					name: 'Sasha',
					text: 'На фото сморится красиво,на деле нет.Плохое качество материала,внешний вид,очень сильно маломерит,нужно брать на 2 размера больше своего-54-56,как на 50.Брать не советую!',
					rating: 2,
					id: '62050beb77fffe0cd128c7d3',
				},
			],
			images: [
				{
					color: 'Grey',
					url: '/media/6200f157c110271da7221014/RTLAAV537301_15738012_1_v1_2x.jpg',
					id: '62050bab77fffe0cd128c7c2',
				},
				{
					color: 'Black',
					url: '/media/6200f157c110271da7221014/RTLAAV537401_15738016_1_v1_2x.webp',
					id: '62050bc077fffe0cd128c7c5',
				},
			],
			id: '6200f157c110271da7221014',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: true,
				isFeatured: false,
			},
			name: 'Полувер',
			category: 'men',
			brand: 'Tom Tailor',
			material: 'Акрил - 40%, Шерсть - 60%',
			rating: 5,
			price: 84.8,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{ name: 'Aliaksei', text: 'Очень качественная вещь!', rating: 5, id: '62050d9a77fffe0cd128c7e2' },
				{
					name: 'Sergey',
					text: 'Отличный джемпер - прекрасно сел, цвет соответствует фотографии, материал приятный, на голое тело сел комфортно!',
					rating: 5,
					id: '62050db077fffe0cd128c7eb',
				},
				{
					name: 'Liza',
					text: 'Хороший пуловер. На рост 198 рукава отлично',
					rating: 5,
					id: '62050dc277fffe0cd128c7f6',
				},
				{
					name: 'Natali',
					text: 'Красивый и качественный свитер, цвет огонь, к телу приятный',
					rating: 4,
					id: '62050dd577fffe0cd128c803',
				},
			],
			images: [
				{
					color: 'Vinous',
					url: '/media/6200f157c110271da7221012/RTLAAQ285501_15017256_1_v1.jpg',
					id: '62050c8b77fffe0cd128c7da',
				},
				{
					color: 'Beige',
					url: '/media/6200f157c110271da7221012/RTLAAQ285401_15017253_1_v1.jpg',
					id: '62050cab77fffe0cd128c7dd',
				},
			],
			id: '6200f157c110271da7221012',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: true,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Полувер',
			category: 'men',
			brand: 'Tom Tailor',
			material: 'Акрил - 80%, Шерсть - 20%',
			rating: 4,
			price: 54.8,
			sizes: ['S INT', 'M INT'],
			discount: '-60%',
			reviews: [
				{ name: 'Natali', text: 'Ни о чём', rating: 2, id: '620510d177fffe0cd128c814' },
				{ name: 'Andrew', text: 'Хорошее качество', rating: 5, id: '620510ed77fffe0cd128c81d' },
			],
			images: [
				{
					color: 'Yellow',
					url: '/media/6200f157c110271da722100e/RTLABA110601_16071291_1_v1.jpg',
					id: '6205107577fffe0cd128c80c',
				},
				{
					color: 'Blue',
					url: '/media/6200f157c110271da722100e/RTLAAQ293301_15017273_1_v1.webp',
					id: '6205109877fffe0cd128c80f',
				},
			],
			id: '6200f157c110271da722100e',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Полувер',
			category: 'men',
			brand: 'Denim Culture',
			material: 'Хлопок - 50%, Акрил - 50%',
			rating: 4,
			price: 203.4,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT', '3XL INT'],
			discount: '-19%',
			reviews: [
				{ name: 'Andrew', text: 'Немного мал, перезаказали на побольше', rating: 4, id: '620511b177fffe0cd128c828' },
			],
			images: [
				{
					color: 'Green',
					url: '/media/6200f157c110271da7221010/RTLAAX966901_16091402_1_v1_2x.webp',
					id: '6205117c77fffe0cd128c824',
				},
			],
			id: '6200f157c110271da7221010',
		},
		{
			particulars: { isNewArrivals: true, isSpecial: false, isBestseller: true, isMostViewed: false, isFeatured: true },
			name: 'Водолазка',
			category: 'men',
			brand: 'Produkt',
			material: 'Акрил - 50%, Хлопок - 50%',
			rating: 4,
			price: 200.8,
			sizes: ['S INT', 'M INT', 'XXL INT', 'XL INT'],
			discount: null,
			reviews: [
				{
					name: 'Aliaksei',
					text: 'Размер чёткий,качество огонь всем советую',
					rating: 5,
					id: '6205124477fffe0cd128c890',
				},
				{ name: 'Sasha', text: 'Просто хотел водолазку', rating: 5, id: '6205125277fffe0cd128c899' },
				{ name: 'Yuri', text: 'Качество не очень', rating: 3, id: '6205126077fffe0cd128c8a4' },
			],
			images: [
				{
					color: 'Blue',
					url: '/media/6200f157c110271da7221016/RTLAAU294001_15685608_1_v1_2x.webp',
					id: '6205121577fffe0cd128c888',
				},
				{
					color: 'Black',
					url: '/media/6200f157c110271da7221016/RTLAAU293501_15685601_2_v1_2x.webp',
					id: '6205123177fffe0cd128c88b',
				},
			],
			id: '6200f157c110271da7221016',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: true,
				isFeatured: false,
			},
			name: 'Платье MARGOT',
			category: 'women',
			brand: 'Mango',
			material: 'Полиэстер - 100%',
			rating: 4,
			price: 99.99,
			sizes: ['L INT', 'XS INT', 'XXS INT', 'S INT', 'M INT'],
			discount: '-58%',
			reviews: [
				{
					name: 'Anna',
					text: 'Ткань летящая, расцветка классная, размер соответствует моему 48,его и брала. Мне не подошло, на рост 164 я огромная и в рюшечку)) Стройняшкам, рекомендую',
					rating: 5,
					id: '620512f777fffe0cd128c8b0',
				},
				{
					name: 'Olga',
					text: 'Красивое платье, очень женственное. Ткань совершенно не мнется, фасон ,я думаю, пойдёт многим. На мой размер 50-52 и рост 170 село идеально. Спасибо.',
					rating: 5,
					id: '6205130777fffe0cd128c8b7',
				},
				{
					name: 'Marina',
					text: 'А мне хоть тон расцветки и подошёл, но не понравились рюши, резинка на груди...',
					rating: 3,
					id: '6205132577fffe0cd128c8c0',
				},
			],
			images: [
				{
					color: 'Multicolor',
					url: '/media/620126dda5293589353a9c74/RTLAAO978301_14935848_1_v1_2x.jpg',
					id: '620512e977fffe0cd128c8ac',
				},
			],
			id: '620126dda5293589353a9c74',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: false,
				isMostViewed: false,
				isFeatured: true,
			},
			name: 'Брюки',
			category: 'women',
			brand: 'Only',
			material: 'Полиэстер - 92%, Эластан - 8%',
			rating: 4,
			price: 105.99,
			sizes: ['36/32 GER', '38/32 GER', '40/32 GET'],
			discount: '-15%',
			reviews: [
				{
					name: 'BettyTyan',
					text: 'Сидят классно, но вот материал не особо понравился',
					rating: 3,
					id: '620513fd77fffe0cd128c997',
				},
				{
					name: 'Alexandra',
					text: 'Посадка оказалась ниже чем предполагалась, и топорщится спереди ткань сильно, так не должно быть',
					rating: 3,
					id: '6205141377fffe0cd128c9a0',
				},
				{
					name: 'Elya',
					text: 'Просто любоовь. Длина что надо. Правда заказала самые маленькие и мне большеваты в талии, но я просто схуднула недавно, с ремнём норм. Рекомендую',
					rating: 5,
					id: '6205142277fffe0cd128c9ab',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c75/RTLAAT332301_15495271_1_v1_2x.webp',
					id: '620513c677fffe0cd128c98f',
				},
				{
					color: 'Grey',
					url: '/media/620126dda5293589353a9c75/RTLABB210301_16189560_1_v1.webp',
					id: '620513dd77fffe0cd128c992',
				},
			],
			id: '620126dda5293589353a9c75',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Платье',
			category: 'women',
			brand: "Levi's",
			material: 'Полиэстер - 100%',
			rating: 5,
			price: 289,
			sizes: ['XS INT', 'S INT', 'M INT'],
			discount: null,
			reviews: [],
			images: [
				{
					color: 'Multicolor',
					url: '/media/620126dda5293589353a9c76/RTLABD360301_16384317_1_v1_2x.webp',
					id: '6205147877fffe0cd128c9b3',
				},
			],
			id: '620126dda5293589353a9c76',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: true,
				isFeatured: true,
			},
			name: 'Купальник',
			category: 'women',
			brand: 'Winzor',
			material: 'Полиамид - 82%, Эластан - 18%',
			rating: 5,
			price: 159,
			sizes: ['40 RUS', '42 RUS', '48 RUS'],
			discount: '-15%',
			reviews: [
				{
					name: 'omarovs Almira',
					text: 'не знаю, во всех ли купальниках этого бренда, но я заказывала 2 купальника (оба этого бренда,), оба малы в верхней части, а плавки очень свободные',
					rating: 5,
					id: '6205158977fffe0cd128c9be',
				},
				{
					name: 'Elina',
					text: 'На не идеальную фигуру) скроет недостатки. В размер',
					rating: 4,
					id: '6205159e77fffe0cd128c9c7',
				},
			],
			images: [
				{
					color: 'Red',
					url: '/media/620126dda5293589353a9c77/RTLAAO630301_14895077_1_v1_2x.webp',
					id: '6205155b77fffe0cd128c9b6',
				},
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c77/RTLAAO630501_14895083_1_v1_2x.webp',
					id: '6205157277fffe0cd128c9b9',
				},
			],
			id: '620126dda5293589353a9c77',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: false,
				isMostViewed: true,
				isFeatured: false,
			},
			name: 'Костюм спортивный',
			category: 'women',
			brand: 'adidas',
			material: 'Полиэстер - 100%',
			rating: 4,
			price: 80.3,
			sizes: ['L INT', 'XS INT', 'S INT'],
			discount: '-60%',
			reviews: [
				{
					name: 'Gaukhar',
					text: 'Мой рост 154, S чуток большая в талии (талия 67см), и чуток длинные рукава, но я оставила, так как все было не критично, да и я привыкла к тому что мне все чуток большевато (люди моего роста поймут), не заказывала XS потому что на хотела, чтобы все обтягивало. Мб стоило бы посмотреть, но Sкой я тоже осталась довольна. Качество прекрасное, все красиво село, легкая, приятная на ощупь ткань, выглядит сдержанно и стильно',
					rating: 5,
					id: '6205161b77fffe0cd128ca46',
				},
				{
					name: 'Marina',
					text: 'Симпатичный костюм. Хорошо сидит на фигуре. К качеству пошива претензий нет. Строчки ровные, нитки не торчат, молнии не заедают. Минус за ткань, к ней все липнет. Все равно выкупила, можно постирать с антистатиком',
					rating: 4,
					id: '6205163177fffe0cd128ca4f',
				},
				{
					name: 'Zhanna',
					text: 'Костюм просто огонь, на бёдра 120 размер 54/56 как влитой, на рост 170 можно было чуть подлиннее конечно, но все равно супер, посадка не занижена, кофта не короткая, то что надо',
					rating: 5,
					id: '6205164e77fffe0cd128ca5a',
				},
				{
					name: 'Elena',
					text: 'Отличная классика адидас, брала дочке 11лет на рост 158 худышка размер xs сел впору, но конечно на вырост будет',
					rating: 5,
					id: '6205166177fffe0cd128ca67',
				},
				{
					name: 'Ruzanna',
					text: 'Классика жанра у адидас. Легкий, теплая осень/весна. Мне не понравилось ощущение на теле из- за состава ткани',
					rating: 4,
					id: '6205167777fffe0cd128ca76',
				},
				{
					name: 'Yana',
					text: 'Размер в размер, на мой 48 взяла 48-50, к качеству без вопросов. Но на мой рост 176 брюки короткие откровенно',
					rating: 4,
					id: '6205168977fffe0cd128ca87',
				},
				{
					name: 'Yulya',
					text: 'Хороший костюм. Нужно иметь в виду что брюки не узкие, комфортно свободные. S на 44 свободно',
					rating: 4,
					id: '620516a277fffe0cd128ca9a',
				},
				{
					name: 'Zhenya',
					text: 'Хороший костюм и вроде бы сел хорошо, но мне напомнил он костюм из 90-х, может сейчас так и модно, но не мой стиль. Размеру заявленному производителем соответсвует.',
					rating: 3,
					id: '620516bd77fffe0cd128caaf',
				},
				{
					name: 'Alla',
					text: 'На 48/50 и рост 174,брюки короткие,намного выше косточки. Если взять больше размер,в поясе будут широкие.Кофта подошла по размеру. Ткань приятная,пошито качественно. Заказывала В размере L.Советую.',
					rating: 4,
					id: '620516db77fffe0cd128cac6',
				},
				{
					name: 'Irina',
					text: 'На рост 170 брюки сели хорошо, рукава тоже длинные, б-104, т-73, г-89, размер подошёл, олимпийка без подклада, тоненькая, имейте ввиду, у брюк посадка на 5см ниже талии.',
					rating: 5,
					id: '6205170077fffe0cd128cadf',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c79/AD002EWLUHD0_12895739_1_v1_2x.webp',
					id: '620515f177fffe0cd128c9ce',
				},
				{
					color: 'Blue',
					url: '/media/620126dda5293589353a9c79/RTLAAT886601_15407757_1_v1_2x.webp',
					id: '6205160177fffe0cd128c9d1',
				},
			],
			id: '620126dda5293589353a9c79',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Костюм спортивный W TEAMSPORT TS',
			category: 'women',
			brand: 'adidas',
			material: 'Полиэстер - 100%',
			rating: 3,
			price: 143.3,
			sizes: ['L INT', 'XS INT', 'S INT', 'M INT'],
			discount: '-40%',
			reviews: [
				{
					name: 'Galina',
					text: 'Не понравился костюм, не успела вернуть . Смотрится колхозно . Качество голимая синтетика.',
					rating: 1,
					id: '6205178677fffe0cd128caf6',
				},
				{
					name: 'Irina',
					text: 'В целом, нормальный костюм, но , на мой взгляд, ткань тонковата для костюма. Как то несуразно скроены брюки. Для моей фигуры низ брюк очень заужен. Это было бы оправдано, если бы ткань была эластичной ,как ,например , не легинсах, а т.к. это ткань менее эластичная, то есть неудобства при нОске этих брюк. Олимпийка хорошая, удобная, длина до талии. В целом костюм смотрится гармонично, ярко.',
					rating: 5,
					id: '6205179d77fffe0cd128cafd',
				},
				{ name: 'Inna', text: 'Ткань колится, к телу неприятная, отказ', rating: 2, id: '620517bf77fffe0cd128cb06' },
				{
					name: 'Bazanova',
					text: 'Очень добротные.На осень,зиму подойдет.Красивый.Люблю эту фирму.Почти всегда в 10.Рекомендую товар.На любой возраст.Только не дамы очень пышных форм.Так как укорочннная кофта.Да и узковатая модель.Всем удачи.',
					rating: 5,
					id: '620517d777fffe0cd128cb11',
				},
				{
					name: 'Anna',
					text: 'Костюм не понравился, полоски не прямые сужаются к низу из за этого ноги кажутся кривыми. Олимпийка коротковатая на рост 178.',
					rating: 1,
					id: '620517ee77fffe0cd128cb1e',
				},
				{
					name: 'Irina',
					text: 'Костюм понравился, и размер подошёл, одно но - верх уж слишком короткий. Ориентируясь на рост модели думала что уж мне - то нормально будет, рост у меня 155, но нет, не понравилось как на мне смотрится, к сожалению отказ.',
					rating: 5,
					id: '620517ff77fffe0cd128cb2d',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c78/RTLAAP963301_15028593_1_v1_2x.webp',
					id: '6205176b77fffe0cd128caf1',
				},
			],
			id: '620126dda5293589353a9c78',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: true,
				isFeatured: false,
			},
			name: 'Куртка утепленная TOKYO',
			category: 'women',
			brand: 'Mango',
			material: 'Полиэстер - 100%',
			rating: 4,
			price: 214,
			sizes: ['XS INT', 'S INT', 'M INT'],
			discount: null,
			reviews: [
				{
					name: 'Alexandra',
					text: 'Отлично, большемерит, на 42-44 и рост 160 -выкупила ХС- и рукав впору и длина. В Ске уже был длинный рукав и горб на спине. Тёплая, тяжёленькая.',
					rating: 5,
					id: '620518ea77fffe0cd128cb4b',
				},
				{
					name: 'Darya',
					text: 'Куртка вообще не понравилась. Неудобный ворот. Если до конца застегнуться молнию, капюшон сразу поднимается, смотрится некрасиво.',
					rating: 3,
					id: '620518ff77fffe0cd128cb56',
				},
				{
					name: 'Anastasia',
					text: 'Куртка очень удобная, свободного силуэта, довольно плотная - думаю, достаточно тёплая (ещё не проверяла). Эту конкретно не взяла, потому что размер выбрала слишком большой. Выкупила такую же, но чёрную и на размер меньше. Если любите светлые куртки, то к этой однозначно нужно присмотреться.',
					rating: 5,
					id: '6205191377fffe0cd128cb63',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c7d/RTLAAX520301_15791304_1_v1.webp',
					id: '6205188a77fffe0cd128cb3e',
				},
				{
					color: 'Green',
					url: '/media/620126dda5293589353a9c7d/RTLAAX520301_15791304_1_v1 (1).webp',
					id: '620518b077fffe0cd128cb42',
				},
				{
					color: 'White',
					url: '/media/620126dda5293589353a9c7d/RTLAAX660101_15809707_1_gggv1.webp',
					id: '620518c277fffe0cd128cb45',
				},
			],
			id: '620126dda5293589353a9c7d',
		},
		{
			particulars: {
				isNewArrivals: true,
				isSpecial: false,
				isBestseller: false,
				isMostViewed: true,
				isFeatured: false,
			},
			name: 'Джинсы GALYA',
			category: 'women',
			brand: 'Mango',
			material: 'Хлопок - 90%, Переработанный полиэстер - 10%',
			rating: 5,
			price: 139.99,
			sizes: ['32 EUR', '34 EUR', '36 EUR'],
			discount: null,
			reviews: [
				{
					name: 'Ekaterina',
					text: 'Наконец-то нашла свои джинсы ! В них не стыдно куда-то пойти, держат форму и к материалу не липнет ничего - идеально.',
					rating: 5,
					id: '620519b577fffe0cd128cb74',
				},
				{
					name: 'Natalia',
					text: 'Хороший, плотный деним, милым прекрасно. Сняла звёздочку за то, что чёрный-чёрный стал темно-серым после двух стирок без нагрева воды.',
					rating: 4,
					id: '620519c477fffe0cd128cb7d',
				},
			],
			images: [
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c7b/RTLAAQ793701_15078412_1_v1.webp',
					id: '6205198977fffe0cd128cb6c',
				},
				{
					color: 'Black',
					url: '/media/620126dda5293589353a9c7b/RTLAAQ793701_15078413_2_v1.webp',
					id: '6205199e77fffe0cd128cb6f',
				},
			],
			id: '620126dda5293589353a9c7b',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: true,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: false,
			},
			name: 'Куртка утепленная',
			category: 'women',
			brand: 'Noisy May',
			material: 'Полиэстер - 100%',
			rating: 4,
			price: 214,
			sizes: ['XS INT', 'S INT', 'M INT'],
			discount: null,
			reviews: [],
			images: [
				{
					color: 'Brown',
					url: '/media/620126dda5293589353a9c7c/RTLABB101301_16177596_2_v1.webp',
					id: '62051ad577fffe0cd128cc0f',
				},
				{
					color: 'Brown',
					url: '/media/620126dda5293589353a9c7c/RTLABB101301_16177595_1_v1.webp',
					id: '62051ad977fffe0cd128cc12',
				},
			],
			id: '620126dda5293589353a9c7c',
		},
		{
			particulars: {
				isNewArrivals: false,
				isSpecial: false,
				isBestseller: true,
				isMostViewed: false,
				isFeatured: true,
			},
			name: 'Джинсы GALA',
			category: 'women',
			brand: 'Mango',
			material: 'Хлопок - 80%, Переработанный полиэстер - 20%',
			rating: 5,
			price: 139.99,
			sizes: ['32 EUR', '34 EUR', '36 EUR'],
			discount: null,
			reviews: [],
			images: [
				{
					color: 'Blue',
					url: '/media/620126dda5293589353a9c7a/RTLABB350001_16215215_2_v1.webp',
					id: '62051b8177fffe0cd128cf63',
				},
				{
					color: 'Blue',
					url: '/media/620126dda5293589353a9c7a/RTLABB350001_16215214_1_v1.webp',
					id: '62051b8477fffe0cd128cf66',
				},
			],
			id: '620126dda5293589353a9c7a',
		},
	],
	cart: [],
	currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			// const item = state.products.find(prod => prod.id === action.payload.id);
			// const itemFiltered = item.map((cloth) => {
			// 	return cloth.images.filter(img => img.color === action.payload.color) && (cloth.sizes.filter(size => size.sizes === action.payload.sizes))
			// })
			const item = {
				color: action.payload.color,
				size: action.payload.size,
				id: action.payload.id,
				image: action.payload.image,
				name: action.payload.name,
				price: action.payload.price,
			}
			const inCart = state.cart.find((item) => {
				return (item.id === action.payload.id) && (item.color === action.payload.color) && (item.size === action.payload.size)
			});
			console.log('action.payload.color', action.payload.color);
			console.log('action.payload.id', action.payload.id);
			console.log('action.payload.price', action.payload.price);
			console.log('action.payload.name', action.payload.name);
			console.log('action.payload.image', action.payload.image);
			return {
				...state,
				// cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
				cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
			};
		case actionTypes.REMOVE_FROM_CART:

			return {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload.id)
			};
		case actionTypes.ADJUST_QTY:
			return {
				...state,
				cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
			};
		case actionTypes.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;