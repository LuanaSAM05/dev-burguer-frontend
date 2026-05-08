import { Elements } from "@stripe/react-stripe-js";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import stripePromise from "../../config/stripeConfig";
import CheckoutForm from "../../components/Stripe/CheckoutForm";

export function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // 🔥 CORREÇÃO: lê o clientSecret da URL em vez do state
  const clientSecret = searchParams.get("clientSecret");

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