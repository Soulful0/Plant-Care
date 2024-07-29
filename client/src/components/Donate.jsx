import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Navbar from './Navbar';
const stripePromise = loadStripe('pk_test_51PhmG6KJnmfwHZaJWxwjOVKJW0dnasyiP2SZo0EJYhvTIm1b3zw4IXEwkY6WFziHS3dwXLNYdpVzZWpSLyycEt7400S3gsrXbF');
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#32325D',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#AAB7C4',
            },
        },
        invalid: {
            color: '#FA755A',
            iconColor: '#FA755A',
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
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            const response = await fetch('/api/stripe/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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
        <div className="container">
            <h1 className="title">Donate</h1>
            <form onSubmit={handleSubmit} className="box">
                <div className="field">
                    <label className="label">Card number</label>
                    <div className="control">
                        <CardElement options={CARD_ELEMENT_OPTIONS} />
                    </div>
                </div>
                <button type="submit" className="button is-primary" disabled={!stripe || loading}>
                    {loading ? 'Processing...' : 'Donate $50'}
                </button>
                {error && <div className="notification is-danger">{error}</div>}
                {success && <div className="notification is-success">Thank you for your donation!</div>}
            </form>
        </div>
    );
};
const Donate = () => (
    <>
        <Navbar /> {/* Add Navbar here */}
        <Elements stripe={stripePromise}>
            <DonateForm />
        </Elements>
    </>
);
export default Donate;