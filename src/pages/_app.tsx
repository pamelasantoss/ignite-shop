import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app';
import Minicart from '../components/minicart';
import { useState } from 'react';
import { CartProvider } from 'use-shopping-cart';
import Header from '../components/header';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const stripeKey = process.env.STRIPE_PUBLIC_KEY || ""
  const [showMinicart, setShowMinicart] = useState(false)

  function handleOpenMinicart() {
    setShowMinicart(true)
  }

  function handleCloseMinicart() {
    setShowMinicart(false)
  }

  return (
    <Container>
      <CartProvider
        cartMode="checkout-session"
        stripe={stripeKey}
        currency="BRL"
        loading={<p>Loading...</p>}
        shouldPersist={true}
      >
        <Header
          onOpenMinicart={handleOpenMinicart}
        />
        <Minicart
          isActive={showMinicart}
          onClose={handleCloseMinicart}
        />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}