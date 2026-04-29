import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from "../../config/stripeConfig";
import CheckoutForm from "../../components/Stripe/CheckoutForm";

export function Checkout() {
  const { state } = useLocation();

  const clientSecret = state?.clientSecret;

  if (!clientSecret) {
    return <h1>Erro, volte e tente novamente</h1>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}