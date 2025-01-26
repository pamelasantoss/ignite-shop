import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: '100%',
  margin: '0 auto',

  '@lg': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxWidth: 1180,
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: '100%',
  height: '400px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    maxWidth: '100%'
  },

  '@lg': {
    maxWidth: 576,
    height: '80vh',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xl',
    color: '$gray300',

    '@lg': {
      fontSize: '$2xl',
    }
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xl',
    color: '$green300',

    '@lg': {
      fontSize: '$2xl',
    }
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },

    '@sm': {
      margin: '1.5rem 0'
    }
  }
})