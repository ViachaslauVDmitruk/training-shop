function ViewCartButton({ step, setStep, type }) {
  return (
    <button type={type} className="shoppingcart-button__view" onClick={() => setStep(1)}>
      View cart
    </button>
  );
}

export default ViewCartButton;
