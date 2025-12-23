import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("A chave secreta do Stripe não foi definida!");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-12-15.clover" as Stripe.LatestApiVersion,
  appInfo: {
    name: "Ignite Shop",
  },
});
