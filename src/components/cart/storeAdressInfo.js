import { Field, ErrorMessage } from 'formik';
import TextErrorDelivery from './errorDelivery';
import { useDispatch, useSelector } from 'react-redux';
import { requestAdressStore } from '../../redux/Shopping/shopping-actions';
import { useEffect } from 'react';

function StorePickupData({ formik, isFindStore, setIsFindStore }) {
	const countries = useSelector((store) => store.shop.countries);
	const adressStore = useSelector((store) => store.shop.storeAdress.data);
	const dispatch = useDispatch();

	useEffect(() => {
		if (formik.values.storeAdress.length > 2) {
			dispatch(requestAdressStore(formik.values.country, formik.values.storeAdress));

			setIsFindStore(() => {
				let foundedItem = adressStore?.find(item => {
					if (item.city.toLowerCase() === formik.values.storeAdress.toLowerCase()) {

						return true;
					}
				}
				);

				return foundedItem?.city || 'empty';
			})
		}
	}, [formik.values.country, formik.values.storeAdress]);

	return (
		<div className="info">
			<div className="choose-info__title">Adress of store</div>
			<div className="choose-info__item">
				<Field
					as="select"
					type="text"
					id="country"
					name="country"
					className="choose-info__input"
					placeholder="Counrty"
					style={formik.touched.country && !formik.values.country ? { border: '1px solid red' } : null}
				>
					<option key={formik.values.deliveryMethod}></option>
					{countries.map((item) => {
						return (
							<option key={item.name} value={item.name}>
								{item.name}
							</option>
						);
					})}
				</Field>
				<ErrorMessage name="country" component={TextErrorDelivery} />
			</div>
			<div className="choose-info__item">
				<Field
					autoComplete="off"
					list="storeAdress"
					name="storeAdress"
					className="choose-info__input"
					placeholder="Store adress"
					disabled={!formik.values.country}
					style={formik.touched.storeAdress && !formik.values.storeAdress ? { border: "1px solid red" } : null}
				/>
				{formik.values.storeAdress
					&&
					<datalist id="storeAdress"					>
						{adressStore?.map((item) => {
							return (<option key={item._id} value={item.city}>{item.city}</option>)
						})
						}
					</datalist>}

				<ErrorMessage name="storeAdress" component={TextErrorDelivery} />
			</div>
		</div>
	);
}

export default StorePickupData;
