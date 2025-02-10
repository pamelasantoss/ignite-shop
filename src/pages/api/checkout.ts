import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { items } = req.body

  console.log('items: ', items)

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.'
    })
  }

  if (!items || items.length === 0) {
    return res.status(400).json({
      error: 'No items provided.'
    })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  try {
    const lineItems = items.map((item: { priceId: string, quantity: number }) => ({
      price: item.priceId,
      quantity: 1
    }))

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: lineItems
    })

    return res.status(201).json({
      checkoutUrl: checkoutSession.url
    })
  } catch (error) {
    console.error("Erro ao criar a sessão de checkout: ", error)

    return res.status(500).json({
      error: 'Error creating checkout session.',
    });
  }
}