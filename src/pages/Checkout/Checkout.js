import React from 'react';
import Confetti from 'react-confetti';
import './CheckoutPage.css';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
        run={true}
      />
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>Your purchase has been completed.</p>
      </div>
    </div>
  );
}

export default CheckoutPage;
