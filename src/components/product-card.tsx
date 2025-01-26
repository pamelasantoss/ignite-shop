import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Product } from "../styles/components/product-card";
import Image from "next/image";

export interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export default function ProductCard({ id, name, imageUrl, price }: ProductType) {
  return (
    <Link href={`/product/${id}`} prefetch={false}>
      <Product className="keen-slider__slide">
        <Image src={imageUrl} width={520} height={480} alt="" />

        <footer>
          <section>
            <strong>{name}</strong>
            <span>{price}</span>
          </section>

          <button type="button">
            <ShoppingBag size={32} />
          </button>
        </footer>
      </Product>
    </Link>
  )
}