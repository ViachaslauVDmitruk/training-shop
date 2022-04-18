import { Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { requestDataCountries } from '../../redux/Shopping/shopping-actions';

import reactInputMask from 'react-input-mask';
import TextErrorDelivery from './errorDelivery';
import StorePickupData from './storeAddressInfo';
import TotalPrice from './totalPrise';
import DeliveryPayButton from './devileryPayButton';
import ViewCartButton from './viewCartButton';

import './css/deliveryInfo.css';

function DeliveryInfo(props) {
	const dispatch = useDispatch();

	return (
		<div className="delivery-info">
			<div className="wrapper-info">
				<div className="choose-method">
					<div className="choose-method__title">Choose the method of delivery of the items</div>
					<div className="choose-method__radio">
						<label className="radio-button">
							<Field
								type="radio"
								id="Choise_1"
								name="deliveryMethod"
								className="choose-method__item"
								value="Pickup from post offices"
								onClick={() => {
									props.formik.setTouched({});
									(props.formik.values.country = '');
								}}
							/>
							<span className="radio-lable">Pickup from post offices</span>
						</label>
					</div>
					<div className="choose-method__radio">
						<label className="radio-button">
							<Field
								type="radio"
								id="Choise_2"
								name="deliveryMethod"
								className="choose-method__item"
								value="Express delivery"
								onClick={() => {
									props.formik.setTouched({});
									(props.formik.values.country = '');
								}}
							/>
							<span className="radio-lable">Express delivery</span>
						</label>
					</div>
					<div className="choose-method__radio">
						<label className="radio-button">
							<Field
								type="radio"
								id="Choise_3"
								name="deliveryMethod"
								className="choose-method__item"
								value="Store pickup"
								onClick={() => {
									dispatch(requestDataCountries());
									props.formik.setTouched({});
									(props.formik.values.country = '');
								}
								}
							/>
							<span className="radio-lable">Store pickup</span>
						</label>
					</div>
				</div>
				<div className="choose-info">
					<div htmlFor="phone" className="choose-info__title">
						Phone
					</div>
					<div className="choose-info__item">
						<Field
							autoComplete="off"
							as={reactInputMask}
							type="tel"
							id="phone"
							name="phone"
							className="choose-info__input"
							placeholder="+375  (_ _) _ _ _ _ _ _ _"
							mask={'+375 (99) 9999999'}
							style={props.formik.touched.phone && !props.formik.values.phone ? { border: '1px solid red' } : null}
						/>
						<ErrorMessage name="phone" component={TextErrorDelivery} />
					</div>
					<div className="choose-info__title">
						E-mail
					</div>
					<div className="choose-info__item">
						<Field
							autoComplete="off"
							type="text"
							id="email"
							name="email"
							className="choose-info__input"
							placeholder="e-mail"
							style={props.formik.touched.email && !props.formik.values.email ? { border: '1px solid red' } : null}
						/>
						<ErrorMessage name="email" component={TextErrorDelivery} />
					</div>
					{props.formik.values.deliveryMethod !== 'Store pickup' && (
						<div>
							<div htmlFor="adress" className="choose-info__title">
								Adress
							</div>
							<div className="choose-info__item">
								<Field
									autoComplete="off"
									type="text"
									id="adress"
									name="country"
									className="choose-info__input"
									placeholder="Country"
									value={props.formik.values.country}
									style={props.formik.touched.country && !props.formik.values.country ? { border: '1px solid red' } : null}
								/>
								<ErrorMessage name="country" component={TextErrorDelivery} />
							</div>
							<div className="choose-info__item">
								<Field
									autoComplete="off"
									type="text"
									name="city"
									className="choose-info__input"
									placeholder="City"
									style={props.formik.touched.city && !props.formik.values.city ? { border: '1px solid red' } : null}
								/>
								<ErrorMessage name="city" component={TextErrorDelivery} />
							</div>
							<div className="choose-info__item">
								<Field
									autoComplete="off"
									type="text"
									name="street"
									className="choose-info__input"
									placeholder="Street"
									style={
										props.formik.touched.street && !props.formik.values.street ? { border: '1px solid red' } : null
									}
								/>
								<ErrorMessage name="street" component={TextErrorDelivery} />
							</div>
							<div className="choose-info__item house">
								<div className="choose-info-house">
									<Field
										autoComplete="off"
										type="text"
										name="house"
										className="choose-info__input"
										placeholder="House"
										style={props.formik.touched.house && !props.formik.values.house ? { border: '1px solid red' } : null}
									/>
									<ErrorMessage name="house" component={TextErrorDelivery} />
								</div>
								<div className="choose-info-house">
									<Field
										autoComplete="off"
										type="text"
										name="apartment"
										className="choose-info__input"
										placeholder="Apartment"
									/>
								</div>
							</div>
						</div>
					)}
				</div>
				{props.formik.values.deliveryMethod === 'Pickup from post offices' && (
					<div className="choose-postcode">
						<div className="choose-info__title">Post code</div>
						<div className="choose-info__item">
							<Field
								autoComplete="off"
								as={reactInputMask}
								type="text"
								id="post-code"
								name="postcode"
								className="choose-info__input"
								placeholder="BY _ _ _ _ _ _"
								mask={'BY 999999'}
								style={props.formik.touched.postcode && !props.formik.values.postcode ? { border: '1px solid red' } : null}
							/>
							<ErrorMessage name="postcode" component={TextErrorDelivery} />
						</div>
					</div>
				)}
				{props.formik.values.deliveryMethod === 'Store pickup' && (
					<div>
						<StorePickupData
							formik={props.formik}
							isFindStore={props.isFindStore}
							setIsFindStore={props.setIsFindStore}
						/>
					</div>
				)}
				<div>
					<div className="agree-information__block">
						<label className="agree-information">
							<Field type="checkbox" id="check" name="check" className="check-agree" />
							<span
								className="check-box"
								style={!props.formik.isValid && props.formik.touched.check && !props.formik.check ? { border: '1px solid red' } : null}
							></span>
							<span className="check-agree-text">I agree to the processing of my personal information</span>
						</label>
						<ErrorMessage name="check" component={TextErrorDelivery} />
					</div>
				</div>
			</div>
			<TotalPrice totalPrice={props.totalPrice} />
			<DeliveryPayButton
				title={'Further'}
				formik={props.formik}
			/>
			<ViewCartButton step={1} setStep={props.setStep} />
		</div>
	);
}

export default DeliveryInfo;
