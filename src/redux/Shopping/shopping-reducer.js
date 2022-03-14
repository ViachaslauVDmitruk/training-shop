import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	products: [
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
	],
	cart: [],
	currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const item = state.products.find(prod => prod.id === action.payload.id);
			const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);

			return {
				...state,
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