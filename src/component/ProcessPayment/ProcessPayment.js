import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe( "pk_test_51Ie2TfDhQUsFv4oXEzoTIBoFjVHIRFLlIUnwpi4TzRccwSHk2K6xWLX1fYa0rlNYHbnQTXFDdhqeqvhX80EinjQu00jA7ahFBR" );

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
    }
  ]
};
const ProcessPayment = () => {

  return (
    <div>
      <div>


      </div>

      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <SimpleCardForm />
      </Elements>
    </div>
  );
};

export default ProcessPayment;