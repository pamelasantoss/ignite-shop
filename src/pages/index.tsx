import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import { HomeContainer } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Head from "next/head";
import ProductCard, { ProductType } from "../components/product-card";
import ProductCardSkeleton from "../components/product-card-skeleton";

interface HomeProps {
  products: ProductType[]
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
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          ))
        ) : (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        )}
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
      price: price.unit_amount
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // A cada 2 horas, uma nova home será gerada
  }
}