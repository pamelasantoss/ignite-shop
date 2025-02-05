import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { validateCartItems } from 'use-shopping-cart/utilities'
import Stripe from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.'
    })
  }

  if (!priceId) {
    return res.status(400).json({
      error: 'Price not found.'
    })
  }

  // TESTE
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    if (price.unit_amount) {
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100)
      }
    }
  })
  // FIM TESTE
  console.log("products: ", products)
  // const line_items = validateCartItems(products, priceId)

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}