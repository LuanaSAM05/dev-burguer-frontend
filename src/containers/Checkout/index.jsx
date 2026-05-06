import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import stripePromise from "../../config/stripeConfig";
import CheckoutForm from "../../components/Stripe/CheckoutForm";

export function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const clientSecret = state?.clientSecret;

  useEffect(() => {
    if (!clientSecret) {
      navigate("/");
    }
  }, [clientSecret, navigate]);

  if (!clientSecret) {
    return <div>Carregando pagamento...</div>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
        },
        loader: "always", 
      }}
    >
      <CheckoutForm />
    </Elements>
  );
}