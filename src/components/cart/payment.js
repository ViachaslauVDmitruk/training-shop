import { Field, ErrorMessage } from 'formik';
import reactInputMask from 'react-input-mask';

import TextErrorDelivery from './errorDelivery';
import imgLogo01 from './img/01.png';
import imgLogo02 from './img/02.png';
import imgLogo03 from './img/03.png';


function Payment(props) {
	console.log('leangth', props.formik.values.cardCVV.length)
	return (
		<div className="delivery-info">
			<div className="choose-method">
				<div className="choose-method__title">Method of payments</div>
				<div className='choose-method__radio'>
					<label htmlFor='choise_1' className='radio-button'>
						<Field
							type="radio"
							id="choise_1"
							name="paymentMethod"
							className="choose-method__item"
							value="PayPal"
						/>
						<span className='radio-lable'></span>
						<img src={imgLogo01} alt="imgLogo" />
					</label>
				</div>
				<div className='choose-method__radio'>
					<label htmlFor='choise_2' className='radio-button'>
						<Field
							type="radio"
							id="choise_2"
							name="paymentMethod"
							className="choose-method__item"
							value="Card"
							checked
						/>
						<span className='radio-lable'></span>
						<img src={imgLogo02} alt="imgLogo" />
					</label>
				</div>
				<div className='choose-method__radio'>
					<label htmlFor='choise_3' className='radio-button'>
						<Field
							type="radio"
							id="choise_3"
							name="paymentMethod"
							className="choose-method__item"
							value="Card" />
						<span className='radio-lable'></span>
						<img src={imgLogo03} alt="imgLogo" />
					</label>
				</div >
				<div className='choose-method__radio'>
					<label htmlFor='choise_4' className='radio-button'>
						<Field
							type="radio"
							id="choise_4"
							name="paymentMethod"
							className="choose-method__item"
							value="Cash" />
						<span className='radio-lable'>Cash</span>
					</label>
				</div >
			</div>
			<div className="choose-info">
				{(props.formik.values.paymentMethod === "PayPal") &&
					<div>
						<div className='choose-info__title'>E-mail</div>
						<div className='choose-info__item'>

							<Field
								type="text"
								id="mail"
								name="cashEmail"
								className="choose-info__input"
								placeholder="e-mail"
								style={props.formik.touched.cashEmail ? { border: "1px solid red" } : null}
							/>
							<ErrorMessage name="cashEmail" component={TextErrorDelivery} />
						</div>
					</div>}
				{(props.formik.values.paymentMethod === "Card") && <div>
					<div className='choose-info__title'>Card</div>
					<div className='choose-info__item'>
						<Field
							as={reactInputMask}
							type="text"
							id="adress"
							name="card"
							className="choose-info__input"
							placeholder="---- ---- ---- ----"
							mask={"9999 9999 9999 9999"}
							style={props.formik.touched.card && !props.formik.values.card ? { border: "1px solid red" } : null}
						/>
						<ErrorMessage name="card" component={TextErrorDelivery} />
					</div>
					<div className='choose-info__item house'>
						<div className='choose-info-house'>
							<Field
								// as={reactInputMask}
								type="text"
								name="cardDate"
								className="choose-info__input"
								placeholder="MM/YY"
								// mask={"99/99"}
								style={props.formik.touched.cardDate && !props.formik.values.cardData ? { border: "1px solid red" } : { border: "none" }}
							/>
							<ErrorMessage name="cardDate" component={TextErrorDelivery} />
						</div>
						<div className='choose-info-house'>
							<Field
								// as={reactInputMask}
								type="text"
								name="cardCVV"
								className="choose-info__input"
								placeholder="CVV"
								// mask={"999"}
								style={props.formik.touched.cardCVV && !props.formik.values.cardCVV ? { border: "1px solid red" } : null}
							/>
							<ErrorMessage name="cardCVV" component={TextErrorDelivery} />
						</div>
					</div>
				</div>}
			</div>
		</div>
	)
	// 		}}
	// 	</Formik >

	// )
}

export default Payment;