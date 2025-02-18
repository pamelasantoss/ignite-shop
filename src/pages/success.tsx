import Link from "next/link";
import { ImageContainer, ImageListContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe"
import Image from "next/image";
import Head from "next/head";
import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface SuccessProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>
        <ImageListContainer>
          {products.map((product, index) => (
            <ImageContainer key={product.name} style={{ '--left': `${index * -15}px` } as React.CSSProperties}>
              <Image src={product.imageUrl} width={140} height={140} alt="" />
            </ImageContainer>
          ))}
        </ImageListContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuu <strong>{customerName}</strong>, sua compra de {products.length} camiseta(s) já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name
  const products = session.line_items?.data.map((item) => {
    if (item.price) {
      const product = item.price.product as Stripe.Product
      return {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  })

  return {
    props: {
      customerName,
      products
    }
  }
}