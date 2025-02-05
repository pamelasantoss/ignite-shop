import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from '../styles/pages/app';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import Minicart from '../components/minicart';
import { useState } from 'react';
import { CartProvider } from 'use-shopping-cart';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const stripeKey = process.env.STRIPE_PUBLIC_KEY || ""
  const [showMinicart, setShowMinicart] = useState(false)

  const cartCounter = 0

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
        loading={<p>Muita calma nessa hora...</p>}
        shouldPersist={false}
      >
        <Header>
          <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
          </Link>

          <CartButton type="button" onClick={handleOpenMinicart}>
            {cartCounter > 0 && (
              <span>1</span>
            )}
            <ShoppingBag size={24} />
          </CartButton>
        </Header>

        <Minicart isActive={showMinicart} onClose={handleCloseMinicart} />

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}