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
  padding: '1.5rem',
  transition: '.6s',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '&.active': {
    right: 0,
  }
})

export const MinicartContent = styled('div', {
  h3: {
    fontSize: '$lg',
    fontWeight: 'bold',
    paddingTop: '1.5rem'
  },

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '2.25rem'
  }
})

export const MinicartSummary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '2.5rem'
  },

  li: {
    display: 'flex',
    justifyContent: 'space-between',

    '&:first-child': {
      p: {
        '&:last-child': {
          fontSize: '$md'
        }
      }
    },

    '&:last-child': {
      p: {
        fontSize: '$md',
        fontWeight: 'bold',

        '&:last-child': {
          fontSize: '$xl'
        }
      }
    }
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
    }
  }
})

export const ProductList = styled('li', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '1.5rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },

  div: {
    flex: 1
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,

    strong: {
      color: '$gray100'
    }
  },

  button: {
    border: 'none',
    background: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '0.5rem 0',
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
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

  h3: {
    fontSize: '$lg',
    fontWeight: 'bold'
  }
})