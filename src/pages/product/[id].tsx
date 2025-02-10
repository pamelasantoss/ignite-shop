import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addItem, cartDetails, cartCount } = useShoppingCart()
  console.log(cartCount)

  if (isFallback) {
    return <p>Loading...</p>
  }

  function handleAddToCart() {
    const productToAdd = {
      id: product.defaultPriceId,
      name: product.name,
      price: product.price,
      currency: 'BRL',
      quantity: 1
    }

    addItem(productToAdd)

    console.log("productToAdd: ", productToAdd)
    console.log("cartDetails: ", cartDetails)
  }

  console.log(product)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button type="button" onClick={handleAddToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // páginas são geradas conforme os produtos forem acessados
    fallback: true // false | true | "blocking"
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params ? params.id : ""

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,        
      }
    },
    revalidate: 60 * 60 * 1 // 1 hora
  }
}