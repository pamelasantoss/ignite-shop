export function formatPrice (value: number | undefined) {
  if (value) {
    const formatValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)
  
    return formatValue
  }

  return 'R$ 0,00'
}