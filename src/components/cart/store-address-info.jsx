import { useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { requestAdressStore } from '../../redux/Shopping/shopping-actions';

import TextErrorDelivery from './error-delivery';

function StorePickupData({ formik, isFindStore, setIsFindStore }) {
	const countries = useSelector((store) => store.shop.countries);
	const adressStore = useSelector((store) => store.shop.storeAddress.data);
	const dispatch = useDispatch();

	useEffect(() => {
		if (formik.values.storeAddress.length > 2) {
			dispatch(requestAdressStore(formik.values.country, formik.values.storeAddress));

			setIsFindStore(() => {
				let foundedItem = adressStore?.find(item => item.city.toLowerCase() === formik.values.storeAddress.toLowerCase())

				return foundedItem?.city || 'empty'
			});
		};
	}, [formik.values.country, formik.values.storeAddress, dispatch, adressStore, setIsFindStore]);

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
					onClick={() => {
						(formik.touched.storeAddress = false);
						(formik.values.storeAddress = '');
					}}
					style={formik.touched.country && !formik.values.country ? { border: '1px solid red' } : null}
				>
					<option placeholder="Counrty"></option>
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
					list="storeAddress"
					name="storeAddress"
					className="choose-info__input"
					placeholder="Store adress"
					disabled={!formik.values.country}
					style={formik.touched.storeAddress && !formik.values.storeAddress ? { border: "1px solid red" } : null}
				/>
				{formik.values.storeAddress
					&&
					<datalist id="storeAddress">
						{adressStore?.map((item) => {
							return (<option key={item._id} value={item.city}>{item.city}</option>)
						})
						}
					</datalist>}
				<ErrorMessage name="storeAddress" component={TextErrorDelivery} />
			</div>
		</div>
	);
}

export default StorePickupData;
