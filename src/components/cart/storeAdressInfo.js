import { Field, ErrorMessage } from 'formik';
import TextErrorDelivery from './errorDelivery';
import { useDispatch, useSelector } from 'react-redux';
import { requestDataCountries } from '../../redux/Shopping/shopping-actions';

function StorePickupData({ formik }) {
  const countries = useSelector((store) => store.shop.countries);

  console.log('countries', countries);
  return (
    <div className="info">
      <div className="choose-info__title">Adress of store</div>
      <div className="choose-info__item">
        <Field
          as="select"
          type="text"
          id="storeAdress"
          name="country"
          className="choose-info__input"
          placeholder="Counrty"
          style={formik.touched.country && !formik.values.country ? { border: '1px solid red' } : null}
        >
          <option></option>
          {countries.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </Field>
        <ErrorMessage name="storeAdress" component={TextErrorDelivery} />
      </div>
      <div className="choose-info__item">
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
  );
}

export default StorePickupData;
