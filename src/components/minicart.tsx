import { X } from "lucide-react";
import { CloseButton, MinicartContainer } from "../styles/components/minicart";

interface MinicartProps {
  isActive: boolean
  onClose: () => void
}

export default function Minicart({ isActive, onClose }: MinicartProps) {
  return (
    <MinicartContainer className={isActive ? "active" : ""}>
      <CloseButton type="button" onClick={onClose}>
        <X size={20} />
      </CloseButton>

      <p>Seu carrinho está vazio!</p>
    </MinicartContainer>
  )
}