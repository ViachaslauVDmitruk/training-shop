import { Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import reactInputMask from 'react-input-mask';
import DeliveryPayButton from './devileryPayButton';
import TotalPrice from './totalPrise';
import ViewCartButton from './viewCartButton';
import TextErrorDelivery from './errorDelivery';

import imgLogo01 from './img/01.png';
import imgLogo02 from './img/02.png';
import imgLogo03 from './img/03.png';
import imgEye01 from './img/eye.png';
import imgEye02 from './img/eyeSlash.png';

function Payment(props) {
	const [isTypePassword, setIsTypePassword] = useState(true);

	return (
		<div className="delivery-info">
			<div className="wrapper-info">
				<div className="choose-method">
					<div className="choose-method__title">Method of payments</div>
					<div className="choose-method__radio">
						<label htmlFor="choise_1" className="radio-button">
							<Field
								type="radio"
								id="choise_1"
								name="paymentMethod"
								className="choose-method__item"
								value="PayPal"
								onClick={() => {
									props.formik.setTouched({});
								}}
							/>
							<span className="radio-lable"></span>
							<img src={imgLogo01} alt="imgLogo" />
						</label>
					</div>
					<div className="choose-method__radio">
						<label htmlFor="choise_2" className="radio-button">
							<Field
								type="radio"
								id="choise_2"
								name="paymentMethod"
								className="choose-method__item"
								value="Visa"
								onClick={() => {
									props.formik.setTouched({});
								}}
							/>
							<span className="radio-lable"></span>
							<img src={imgLogo02} alt="imgLogo" />
						</label>
					</div>
					<div className="choose-method__radio">
						<label htmlFor="choise_3" className="radio-button">
							<Field
								type="radio"
								id="choise_3"
								name="paymentMethod"
								className="choose-method__item"
								value="Master"
								onClick={() => {
									props.formik.setTouched({});
								}}
							/>
							<span className="radio-lable"></span>
							<img src={imgLogo03} alt="imgLogo" />
						</label>
					</div>
					<div className="choose-method__radio">
						<label htmlFor="choise_4" className="radio-button">
							<Field
								type="radio"
								id="choise_4"
								name="paymentMethod"
								className="choose-method__item"
								value="Cash"
							/>
							<span className="radio-lable">Cash</span>
						</label>
					</div>
				</div>
				<div className="choose-info">
					{props.formik.values.paymentMethod === 'PayPal' && (
						<div>
							<div className="choose-info__title">E-mail</div>
							<div className="choose-info__item">
								<Field
									type="text"
									id="mail"
									name="cashEmail"
									className="choose-info__input"
									placeholder="e-mail"
									style={props.formik.touched.cashEmail && !props.formik.values.cashEmail ? { border: '1px solid red' } : null
									}
								/>
								<ErrorMessage name="cashEmail" component={TextErrorDelivery} />
							</div>
						</div>
					)}
					{
						(props.formik.values.paymentMethod === 'Visa' || props.formik.values.paymentMethod === 'Master') && (
							<div>
								<div className="choose-info__title">Card</div>
								<div className="choose-info__item">
									<Field
										as={reactInputMask}
										type="text"
										id="adress"
										name="card"
										autoComplete="off"
										className="choose-info__input"
										placeholder="---- ---- ---- ----"
										mask={'9999 9999 9999 9999'}
										style={props.formik.touched.card && !props.formik.values.card ? { border: '1px solid red' } : null}
									/>
									<ErrorMessage name="card" component={TextErrorDelivery} />
								</div>
								<div className="choose-info__item house">
									<div className="choose-info-house">
										<Field
											as={reactInputMask}
											type="text"
											name="cardDate"
											autoComplete="off"
											className="choose-info__input"
											placeholder="MM/YY"
											mask={'99/99'}
											style={props.formik.touched.cardDate && !props.formik.values.cardDate ? { border: '1px solid red' } : null}
										/>
										<ErrorMessage name="cardDate" component={TextErrorDelivery} />
									</div>
									<div className="choose-info-house cvv">
										<Field
											type={isTypePassword ? "password" : "text"}
											name="cardCVV"
											autoComplete="off"
											className="choose-info__input"
											placeholder="CVV"
											style={props.formik.touched.cardCVV && !props.formik.values.cardCVV ? { border: '1px solid red' } : null}
										/>
										{isTypePassword && <div className='cvv-img' onClick={() => setIsTypePassword(false)} >
											<img src={imgEye01} alt="imgEye" />
										</div>}
										{!isTypePassword && <div className='cvv-img' onClick={() => setIsTypePassword(true)}>
											<img src={imgEye02} alt="imgEye" />
										</div>}
										<ErrorMessage name="cardCVV" component={TextErrorDelivery} />
									</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
			<TotalPrice totalPrice={props.totalPrice} />
			<DeliveryPayButton
				title={props.formik.values.paymentMethod !== 'Cash' ? 'Check out' : 'Ready'}
				formik={props.formik}
			/>
			<ViewCartButton step={2} setStep={props.setStep} />
		</div>
	);
}

export default Payment;
