import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Link from "next/link";
import Head from "next/head";
import { ShoppingBag } from "lucide-react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 24
        }
      }
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <section>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </section>

                <button type="button">
                  <ShoppingBag size={32} />
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // A cada 2 horas, uma nova home será gerada
  }
}