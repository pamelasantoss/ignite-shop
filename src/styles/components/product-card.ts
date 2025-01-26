import { styled } from "..";

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%'
    },

    strong: {
      fontSize: '$md',
      color: '$gray100',

      '@lg': {
        fontSize: '$lg',
      },

      '@sm': {
        maxWidth: '90%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$green300',

      '@lg': {
        fontSize: '$xl',
      }
    },

    button: {
      marginTop: 'auto',
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 6,
      minWidth: 56,
      width: 56,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      }
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})