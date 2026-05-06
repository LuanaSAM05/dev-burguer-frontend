import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { useCart } from "../../../hooks/CartContext";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { cartProducts, clearCart } = useCart();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isReady) {
        setIsReady(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Aguarde o formulário carregar completamente.");
      return;
    }

    setIsLoading(true);

    try {
      const products = cartProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }));

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });

      if (error) {
        toast.error(error.message || "Erro no pagamento!");
        setIsLoading(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        const response = await api.post(
          "/orders",
          { products },
          { validateStatus: () => true }
        );

        if (response.status === 200 || response.status === 201) {
          clearCart();
          toast.success("Pedido realizado com sucesso!");
          navigate(
            `/complete-payment?payment_intent_client_secret=${paymentIntent.client_secret}`
          );
        } else {
          toast.error("Erro ao salvar pedido");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro no sistema!");
      setMessage("Erro no pagamento");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement
          id="payment-element"
          onReady={() => setIsReady(true)}
          options={{
            layout: "tabs",
          }}
        />

        {!isReady && (
          <p style={{ textAlign: "center", color: "#888", margin: "12px 0" }}>
            Carregando métodos de pagamento...
          </p>
        )}

        <button
          disabled={isLoading || !stripe || !elements || !isReady}
          className="button"
        >
          {isLoading ? "Processando..." : "Pagar agora"}
        </button>

        {message && <div>{message}</div>}
      </form>
    </div>
  );
}