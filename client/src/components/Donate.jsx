import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Navbar from "./Navbar";

// Load the Stripe API key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const DonateForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      const response = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 5000,
        }),
      });

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (result.error) {
        setError(result.error.message);
        setLoading(false);
      } else {
        setSuccess(true);
        setLoading(false);
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#85c88a', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <h1
          className="title"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            color: "#000"
          }}
        >
          Donate
        </h1>
        <form onSubmit={handleSubmit} className="box">
          <div className="field">
            <label className="label">Card number</label>
            <div className="control">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>
          </div>
          <button
            type="submit"
            className="button"
            disabled={!stripe || loading}
            style={{
              backgroundColor: '#85c88a',
              color: 'black',
              width: '100%',
              fontWeight: 'bold',
            }}
          >
            {loading ? "Processing..." : "Donate $50"}
          </button>
          {error && <div className="notification is-danger">{error}</div>}
          {success && (
            <div className="notification is-success">
              Thank you for your donation!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const Donate = () => (
  <Elements stripe={stripePromise}>
    <DonateForm />
  </Elements>
);

export default Donate;
