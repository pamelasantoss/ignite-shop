import { X } from "lucide-react";
import { CloseButton, EmptyCart, MinicartContainer, MinicartContent, MinicartSummary, ProductList } from "../styles/components/minicart";
import Image from "next/image";

interface MinicartProps {
  isActive: boolean
  onClose: () => void
}

export default function Minicart({ isActive, onClose }: MinicartProps) {
  const products = [{ item: 1 }]

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
              <ProductList>
                <Image src="https://placehold.co/400x400" width={100} height={100} alt="" />

                <div>
                  <p>Nome do produto</p>
                  <p><strong>R$ 79,90</strong></p>
                  <button type="button">Remover</button>
                </div>
              </ProductList>

              <ProductList>
                <Image src="https://placehold.co/400x400" width={100} height={100} alt="" />

                <div>
                  <p>Nome do produto</p>
                  <p><strong>R$ 79,90</strong></p>
                  <button type="button">Remover</button>
                </div>
              </ProductList>
            </ul>
          </MinicartContent>
          <MinicartSummary>
            <ul>
              <li>
                <p>Quantidade</p>
                <p>3 itens</p>
              </li>
              <li>
                <p>Valor</p>
                <p><strong>R$ 270,00</strong></p>
              </li>
            </ul>
            
            <button>Finalizar compra</button>
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