import { styled } from "..";

export const MinicartContainer = styled('div', {
  background: '$gray800',
  position: 'fixed',
  right: '-30%',
  top: 0,
  width: '25%',
  height: '100%',
  zIndex: 10,
  boxShadow: '0 0 25px black',
  padding: 24,
  transition: '.6s',

  '&.active': {
    right: 0,
  }
})

export const CloseButton = styled('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  position: 'absolute',
  right: 24,
  color: '$gray300',
})

export const EmptyCart = styled('div', {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  p: {
    fontSize: '$lg'
  }
})