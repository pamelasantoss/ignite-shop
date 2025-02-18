import { X } from "lucide-react";
import { CloseButton, EmptyCart, MinicartContainer, MinicartContent, MinicartSummary, ProductList } from "../styles/components/minicart";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { useMemo, useState } from "react";
import axios from "axios";
import { CartDetails } from "use-shopping-cart/core";
import { formatPrice } from "../utils/formatPrice";

interface MinicartProps {
  isActive: boolean
  onClose: () => void
}

export default function Minicart({ isActive, onClose }: MinicartProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const cartDetails: CartDetails | undefined = useShoppingCart().cartDetails;
  const { cartCount, totalPrice, removeItem } = useShoppingCart()

  const products = useMemo(() => {
    const getProducts = Object.values(cartDetails ?? {})
    if (getProducts) {
      return getProducts
    }
    return []
  }, [cartDetails])

  async function handleCheckout() {
    const items = products.map(item => ({
      priceId: item.id,
      quantity: item.quantity,
    }));

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', { items })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
      console.error('Erro ao processar o checkout', err);
    }
  }

  return (
    <MinicartContainer className={isActive ? "active" : ""}>
      <CloseButton type="button" onClick={onClose}>
        <X size={20} />
      </CloseButton>

      {products.length > 0 ? (
        <>
          <MinicartContent>
            <h3>Sacola de compras</h3>

            <ul>
              {products.map((product) => (
                <ProductList key={product.id}>
                  <Image src={product.imageUrl} width={100} height={100} alt="" />

                  <div>
                    <p>{product.name}</p>
                    <p><strong>{product.formattedPrice}</strong></p>
                    <button type="button" onClick={() => removeItem(product.id)}>Remover</button>
                  </div>
                </ProductList>
              ))}
            </ul>
          </MinicartContent>
          <MinicartSummary>
            <ul>
              <li>
                <p>Quantidade</p>
                {cartCount && cartCount > 1 ? (
                  <p>{cartCount} itens</p>
                ) : (
                  <p>{cartCount} item</p>
                )}
              </li>
              <li>
                <p>Valor</p>
                <p><strong>{formatPrice(totalPrice)}</strong></p>
              </li>
            </ul>
            
            <button type="button" disabled={isCreatingCheckoutSession} onClick={handleCheckout}>Finalizar compra</button>
          </MinicartSummary>
        </>
      ) : (
        <EmptyCart>
          <h3>Seu carrinho está vazio!</h3>
        </EmptyCart>
      )}
    </MinicartContainer>
  )
}