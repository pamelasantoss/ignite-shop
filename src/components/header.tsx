import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { HeaderContainer, CartButton } from "../styles/components/header";
import { useShoppingCart } from 'use-shopping-cart';

import logoImg from '../assets/logo.svg'

interface HeaderProps {
  onOpenMinicart: () => void
}

export default function Header({ onOpenMinicart }: HeaderProps) {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/" prefetch={false}>
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton type="button" onClick={onOpenMinicart}>
        {cartCount && (
          <span>{cartCount}</span>
        )}
        <ShoppingBag size={24} />
      </CartButton>
    </HeaderContainer>
  )
}