import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { CartButton, Container, Header } from '../styles/pages/app';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import Minicart from '../components/minicart';
import { useState } from 'react';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [showMinicart, setShowMinicart] = useState(false)

  function handleOpenMinicart() {
    setShowMinicart(true)
  }

  function handleCloseMinicart() {
    setShowMinicart(false)
  }

  return (
    <Container>
      <Header>
        <Link href="/" prefetch={false}>
          <Image src={logoImg} alt="" />
        </Link>

        <CartButton type="button" onClick={handleOpenMinicart}>
          <ShoppingBag size={20} />
        </CartButton>
      </Header>

      <Minicart isActive={showMinicart} onClose={handleCloseMinicart} />

      <Component {...pageProps} />
    </Container>
  )
}