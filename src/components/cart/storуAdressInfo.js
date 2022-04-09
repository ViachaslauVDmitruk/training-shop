import { Field, ErrorMessage } from 'formik';
import TextErrorDelivery from './errorDelivery';
import { useDispatch, useSelector } from 'react-redux';

function StorePickupData() {
	const countries = useSelector(store => store.shop.countries);
	const dispatch = useDispatch();
	return (
		<div className="info">
			<div htmlFor="storeAdress" className='choose-info__title'>Adress of store</div>
			<div className='choose-info__item'>
				<Field
					type="text"
					id="storeAdress"
					name="country"
					className="choose-info__input"
					placeholder="Counrty"
					// style={props.formik.touched.country ? { border: "1px solid red" } : null}
					onClick={() => dispatch(requestDataCountries())}
				>
					{countries.map(item => {
						return (
							<option key={item.id} value={item.name}>{item.name}</option>
						)
					})}
				</Field>
				<ErrorMessage name="storeAdress" component={TextErrorDelivery} />
			</div>
			<div className='choose-info__item'>
				<Field
					type="text"
					id="storeAdress"
					name="storeAdress"
					className="choose-info__input"
					placeholder="Store adress"
				// style={props.formik.touched.storeAdress ? { border: "1px solid red" } : null}
				/>
				<ErrorMessage name="storeAdress" component={TextErrorDelivery} />
			</div>
		</div>
	)
}

export default StorePickupData;