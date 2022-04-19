import * as Yup from 'yup';
import {
	regExCard,
	regExCardDate,
	regExCVV,
	regExMail,
	regExPhone
} from './regex-const';

const required = 'Поле должно быть заполнено';
const email = 'Incorrect email format';
const characters = 'Incorrect characters';

export const validSchemaStepTwo = (shopFouded) => Yup.object().shape({
	phone: Yup.string().matches(regExPhone, 'Неверный номер').required(required),
	email: Yup.string()
		.email(email)
		.matches(regExMail, characters)
		.required(required),
	country: Yup.string().required(required),

	city: Yup.string().when('deliveryMethod', {
		is: (deliveryMethod) => deliveryMethod === 'Pickup from post offices' || deliveryMethod === 'Express delivery',
		then: Yup.string()
			.required(required),
	}),

	storeAddress: Yup.string().when('deliveryMethod', {
		is: 'Store pickup',
		then: Yup.string()
			.matches(shopFouded, 'Здесь рыбы нет!')
			.required(required),
	}),

	street: Yup.string().when('deliveryMethod', {
		is: (deliveryMethod) => deliveryMethod === 'Pickup from post offices' || deliveryMethod === 'Express delivery',
		then: Yup.string()
			.required(required),
	}),

	house: Yup.string().when('deliveryMethod', {
		is: (deliveryMethod) => deliveryMethod === 'Pickup from post offices' || deliveryMethod === 'Express delivery',
		then: Yup.string()
			.required(required),
	}),

	postcode: Yup.string().when('deliveryMethod', {
		is: 'Pickup from post offices',
		then: Yup.string().required(required),
	}),
	check: Yup.boolean().required(required),
});

export const validSchemaStepThree = Yup.object().shape({
	cashEmail: Yup.string().when('paymentMethod', {
		is: 'PayPal',
		then: Yup.string()
			.email(email)
			.matches(regExMail, characters)
			.required(required),
	}),

	card: Yup.string().when('paymentMethod', {
		is: (paymentMethod) => paymentMethod === 'Visa' || paymentMethod === 'Master',
		then: Yup.string()
			.matches(regExCard, 'Некорректный номер')
			.min(19, 'Должно быть 16 цифр')
			.max(19, 'Должно быть 16 цифр')
			.required(required),
	}),

	cardDate: Yup.string().when('paymentMethod', {
		is: (paymentMethod) => paymentMethod === 'Visa' || paymentMethod === 'Master',
		then: Yup.string()
			.matches(regExCardDate, 'Некорректная дата').required(required),
	}),

	cardCVV: Yup.string().when('paymentMethod', {
		is: (paymentMethod) => paymentMethod === 'Visa' || paymentMethod === 'Master',
		then: Yup.string()
			.matches(regExCVV, 'Только цифры').required(required)
			.min(3, 'Минимум 3 цифры')
			.max(4, 'максимум 4 цифры')
			.required(required),
	}),
});